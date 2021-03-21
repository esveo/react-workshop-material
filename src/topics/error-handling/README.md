# Error handling and Exceptions in sync and async code

**Overarching goal: Never accidentally miss an error**

## Exceptions in sync code:

```ts
function launchApp() {
  inner();
}

function inner() {
  throw new Error("Boom");
}

try {
  launchApp();
} catch (err: unknown) {
  // Show error modal, send to logging service etc.
  console.error(err); // Boom

  if (err instanceof Error) {
    console.log(err.stack);
  }
}
```

Characteristics:

- Not typesafe - always assume unknown and narrow the type explicitly
- Can skip levels and do not have to be handled at every level
- In theory, a global try ... catch catches every single error in our app - Great!

<!--




 -->

## Exceptions in callback-style code:

```ts
function launchApp() {
  // Error will not be propagated
  setTimeout(() => {
    inner();
  }, 1000);
}

function inner() {
  throw new Error("Boom");
}

try {
  launchApp();
} catch (err: unknown) {
  // Show error modal, send to logging service etc.
  console.error("Logging error", err); // Boom

  if (err instanceof Error) {
    console.log(err.stack);
  }
}
```

<!--




 -->

## Node.js-style callbacks:

```ts
function launchApp(callback: (err: Error | null, result: any) => void) {
  setTimeout(() => {
    try {
      inner();
      callback(null, 5);
    } catch (err) {
      callback(err, 5);
    }
  }, 1000);
}

function inner() {
  throw new Error("Boom");
}

launchApp((err, result) => {
  if (err) {
    console.error("Logging error", err); // Boom
  } else {
    console.log(result);
  }
});
```

Characteristics:

- Errors part of signature & typesafe
- tedious to write
- Can not skip levels

<!--




 -->

## Promises to the rescue!

```ts
function launchApp(): Promise<void> {
  return sleep(1000).then(() => inner());
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function inner() {
  throw new Error("Boom");
}

launchApp().catch((err) => {
  if (err) {
    console.error("Logging error", err); // Boom
  }
});
```

Characteristics:

- As long as we stay within the promise chain, errors will get propagated!
- Consumers of promise-returning functions need to be aware!

<!--




 -->

## Even simpler with async/await

```ts
async function launchApp() {
  await sleep(1000);

  [1, 2, 3].forEach(async (x) => {
    // Not propagated, since forEach does not care about a returned promise
    await asyncFunc();
  });

  for (const x of [1, 2, 3]) {
    // correct propagation
    await asyncFunc();
  }

  inner();
}
```

Characteristics

- We are back to a simple try catch flow
- We have to be careful when passing an async function as a callback. Not all functions with callbacks handle a returned promise.

<!--




 -->

```ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  await sleep(1000);
  throw new Error("Opps");

  // end will never be called.
  // express catches errors and ends, but NOT rejected promises!
  res.end("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

<!--




 -->

## Summary until now:

- You don't have to add try ... catch everywhere
- Just make sure, that error propagation is not blocked somewhere so no errors vanish

<!--




 -->

## When typesafety is important

Add the error to the signature BUT! instead of adding it as an additional return parameter, return a discriminated union.
This forces all consumers to specifically think about the error state:

```ts
function calculate():
  | { type: "SUCCESS"; data: number }
  | { type: "ERROR"; error: Error } {
  if (Math.random() > 0.5) {
    return { type: "SUCCESS", data: 5 };
  } else {
    return {
      type: "ERROR",
      error: new Error("Random number smaller than 0.5"),
    };
  }
}

const result = calculate();

if (result.type === "ERROR") {
  // log
  console.log(result.error.stack);
} else {
  console.log("Success!", result.data);
}
```

Impossible state is now impossible in the signature: Having an error AND data is not possible!

Downside: You have to handle the error at every level.

<!--




 -->

## Exceptions in React

Errors during render are handled by your closes [error boundary](https://reactjs.org/docs/error-boundaries.html):

```tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

With TypeScript, you will only very rarely encounter these!

React won't handle any other errors for you! You have to do this yourself.

<!--




 -->

### Exercise 1

#### Task 1

- Take a look at the `satellites` state that tracks the currently loaded satellites. (in `App.tsx` or in a `reducer`)
  - Currently it is types as `Satellite[]`
  - This gives us NO option to figure out what the current loading state is.
- Define the possible states that this peace of data can have and define `types` for them:
  - `LOADING`
  - `SUCCESS`
  - `ERROR`
- Type the state variable (or reducer state) as a union of all those possible options
- Adapt your component so that all states are handled

<!--




 -->

#### Task 2 (if not already done)

- Handle a failing fetch request of the satellites
- Display the error message in the UI
