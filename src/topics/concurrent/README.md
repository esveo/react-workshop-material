# Suspense for Data-Fetching and Concurrent Rendering

**DISCLAIMER**: Suspense for Data-Fetching and Concurrent Rendering are still experimental and not officially supported in the release branch of React / React-DOM. The core principles of this chapter are unlikely to change but APIs will definitely change until the first public release.

## Exercise 1

### Task 1

- Adapt the Satellite Form and render an img tag with the src `https://picsum.photos/seed/${satellite.id}/200/150` below the title when an existing satellite is passed through props.
- Observe the behavior of the application when switching satellites or reloading the page.

## Treating an image as data

- To be able to explicitly define loading states, we need a way to treat loading images the same as loading data

### Exercise 2

### Task 1

- Add the following function to your project (e.g. in `src/app/libs/data-image/getImageDataUrl.ts`)

```ts
/**
 * Download an image, and return the image data as a base64 data uri.
 */
export async function getImageDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      canvas.getContext("2d")!.drawImage(img, 0, 0);

      const dataUrl = canvas.toDataURL("image/png");
      resolve(dataUrl);
    };

    img.onerror = (err) => reject(err);

    // Trigger loading by setting the src attribute
    img.src = src;
  });
}
```

<!--





 -->

### Task 2

- Use `getImageData` in your form to download the dataurl of the current src.
- Note: `getImageData` is a side effect! Don't call it during render!
- Render a loading text until the image data is loaded and only then display the image

<!--





 -->

## Suspense for lazy components

[Docs](https://reactjs.org/docs/code-splitting.html#reactlazy)

It would be nice if we could make use of this feature for data loading.

How does suspense + React.lazy work?

- React renders an app (everythin is defined eager)
- Use clicks on a button that switches a state
- React rerenders.
- In this new resulting tree, React finds a lazy component: React.lazy
- React triggers the loading function of the component (that returns a promise)
  - Note that, strictly speaking, this is a side effect during rendering
  - React is okay with that, as long as this side effect is idempotent (rerendering must not retrigger the fetch)
- React than throws the promise `throw loadingPromise` which instantly stops the current rendering process
- The promise is caught by the closes `<Suspense>` boundary, which renders the fallback, instead of its children.
- The `<Suspense>` boundary then waits for the promise to fulfill, and retries the rendering of its children.
- The component is now available synchronously (!) and React can finish rendering and will commit the new UI to the DOM.

<!--





 -->

Pitfalls:

- React may try to rerender the children multiple times --> Developers must not refetch the data on every render! The resulting promise needs to be cached somewhere
- React does not keep states, refs or effects of a suspended tree --> We cannot cache the promise in the suspended component itself.
- For React.lazy + import() the promise is cached in webpack, because webpack does not want to reload modules ever again.
- After the promise resolves, the data needs to be available synchronously! Since promises are always async, we need to cache the promise itself AND the resulting data.

<!--





 -->

### Exercise 2

#### Task 1

- Create new file `src/apps/libs/data-image/useSuspendingImageSrc.ts`
- Create a variable: `const imageCache = new Map<string, { loadingPromise: Promise<string>, dataUrl: string | null }>()`
- Implement a new custom hook `function useSuspendingImageSrc(src: string): string`
- This hook checks the imageCache:

  - If the map has the current src as a key
    - If the dataUrl is already loaded
      - We return the dataUrl
    - Else: We throw the loadingPromise
  - Else:
    - We start loading the image with `getImageData(src)` and put the resulting promise in the imageCache
    - We wait for the promise to resolve (not async/wait in components! use .then) and update the cache value to contain the resulting data url
    - We throw the loadingPromise

- Create a new component `function SuspenseImage(props: ComponentProps<'img'>)`
  - Use `useSuspendingImageSrc` to create the dataUrl
  - Pass all props to a new `img` element and overwrite the src with your created dataUrl
- Use `SuspenseImage` in `SatelliteForm` (don't forget to wrap the SuspenseImage with a `<Suspense>` boundary)

<!--





 -->

#### Task 2

- Let's think about the implications of our approach:
  - What difference does it make, if we render `<Suspense>` directly around the image instead of around the whole `<SatelliteForm>`
  - What are possible problems with our caching strategy?
  - Where could we put this cache instead of in module scope?

<!--





 -->

## Activating concurrent mode

In concurrent mode, React can start rendering the next screen in memory
During this inmemory render, React may find a thrown Promise or another high-priority update is scheduled (typing into an input for example).
React is then able to stop the inmemory render to squeeze in the update or wait for data.

It will then later resume the suspended render.

We have to opt-in to concurrent rendering by using an experimental React build and adapting our entry point:

```tsx
import { unstable_createRoot } from "react-dom";
import type {} from "react-dom/experimental";
import type {} from "react/experimental";
import { App } from "./App";
import "./index.css";

const container = document.querySelector("#app");

unstable_createRoot(container!).render(<App />);
```

<!--





 -->

## Stop unmounting current UI on a Suspense

Removing existing UI only to show a loading spinner can lead to bad UX.
We can instruct React to leave the current screen until all data is ready.

2 Approaches:

<!--





 -->

### useTransition

```tsx
function App() {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition();
  return (
    <>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId);
            setResource(fetchProfileData(nextUserId));
          });
        }}
      >
        Next
      </button>
      {isPending ? " Loading..." : null}
      <Suspense fallback={<Spinner />}>
        <ProfilePage resource={resource} />
      </Suspense>
    </>
  );
}
```

<!--





 -->

### useDeferredValue

```tsx
function App() {
  const [text, setText] = useState("hello");
  const deferredText = useDeferredValue(text);

  return (
    <div className="App">
      {/* Keep passing the current text to the input */}
      <input value={text} onChange={handleChange} />
      ...
      {/* But the list is allowed to "lag behind" when necessary */}
      <MySlowList text={deferredText} />
    </div>
  );
}
```

<!--





 -->

#### Exercise

##### Task 1:

- Use `useDeferredValue` to create a variant of the `selectedSatelliteId` state that lags behind the actually selected value
- Only use this deferred variant to calculate the props that you pass to the `SatelliteForm`
- When you now switch between satellites, the form should display the old variant until all data is loaded.

<!--





 -->

### Preparing for Concurrent React:

- Only idempotent Side-Effects during render.
  - Only cached requests
  - Only write to refs on initial render
- Expect 100 renders before even one commit happens!
- Don't do anything in render that requires a cleanup

<!--





 -->

### Summary

- Suspense for Data Fetching allows colocation by catching thrown promises
- Explicit decision about location of `<Suspense>` boundaries
- Concurrent Mode allows one parallel inmemory-render
- By using APIs like useTransition or useDeferredValue, we explicitly define behavior during the loading times
