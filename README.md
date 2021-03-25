# esveo Academy React Workshops Material

This repository is intended to be used as guiding material for React Workshops.

## TLDR

- `git clone https://github.com/esveo/react-workshop-material`
- `cd react-workshop-material`
- `yarn`
- `yarn watch`
- `yarn watch:types` if your IDE does not automatically run the task and if you need project wide type checking.

## Folder structure

- `/src/app`: The base application that attendants can use to complete the exercises of various topics.
- `/src/topics/...`: Folders for different workshop topics. Include a `README.md` with some theory and the final source code as a solution for all exercises of this topic.
- `./server.js`: A dummy API that is used for all exercises. By default, the apps use the hosted version of this api at https://esveo-academy-react-workshop.herokuapp.com/satellites

## Topics

### useEffect + useMemo + useCallback

Clock with a simple custom hook: useInterval (useEffect to specify interval with delay and callback)

### useReducer (+ immer)

Satellites state. Not only list of satellite (ids) but also satellites by id.

### RenderProps

SatellitesSelect based on a common list component with generics and strategy pattern

### Compound Components

We will write a very simple form library to show case the possibilities of compound components.

### WebSockets: Typesafe Protocols & imperative APIs

Live Chat component, that connects to a running web socket.

### Microfrontends

Group Chat as Runtime dependency

### Suspense for Data Fetching

Integrate an image per satellite id that suspends loading until the image is fully loaded from the url

## Optional Topics

### CSS-in-JS

This repository is setup to work with [Emotion.js](https://emotion.sh/docs/introduction) as a CSS-in-JS solution.
If you want, you can do all your styling work with plain css (not css-modules or scss is currently set up) or with Emotion.

#### The css prop:

```tsx
import { theme } from "./theme.ts";

function App() {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${theme.mainColor};
        }
      `}
    >
      Hover to change color.
    </div>
  );
}

//
//
//
//

function Equivalent() {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: theme.mainColor,
        },
      }}
    >
      This has a hotpink background.
    </div>
  );
}

//
//
//
//
//

function ExtractedStyles() {
  return <div css={mainStyles}>This has a hotpink background.</div>;
}

const mainStyles = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${theme.mainColor};
  }
`;
```
