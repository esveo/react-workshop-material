# useReducer

- When you have multiple dependant states
- When you need access to state (or other states) when updating states

**Example with multiple states**

```tsx
function ButtonWithHistory() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  function increment() {
    setCounter(counter + 1);
    setHistory(counter);
  }

  function undo() {
    setCounter(history[history.length - 1]);
    setHistory(history.slice(0, -1));
  }

  return (
    <div>
      <button onClick={increment}>Increment!</button>
      <button onClick={undo}>Increment!</button>
    </div>
  );
}
```







**Example with a reducer**

```tsx
type HistoryButtonAction =
  | {
      type: "INCREMENT";
      by: number;
    }
  | { type: "UNDO" };

type HistoryButtonState = {
  current: number;
  history: number[];
};

function historyReducer(
  state: HistoryButtonState,
  action: HistoryButtonAction
) {
  switch (action.type) {
    case "INCREMENT":
      return {
        current: state.current + 1,
        history: [...state.history, state.current],
      };
    case "UNDO":
      return {
        current: state.history[state.history.length - 1],
        history: state.history.slice(0, -1),
      };
  }
}

function ButtonWithHistory() {
  const [state, dispatch] = useReducer(historyReducer, {
    current: 0,
    history: [],
  });

  function increment() {
    dispatch({ type: "INCREMENT", by: 1 });
  }

  function undo() {
    dispatch({ type: "UNDO" });
  }

  return (
    <div>
      <button onClick={increment}>Increment!</button>
      <button onClick={undo}>Increment!</button>
    </div>
  );
}
```










## API

### useReducer

```ts
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
function useReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>,
  initializer?: undefined
): [ReducerState<R>, Dispatch<ReducerAction<R>>];
```











## Exercise 1: Goal: We want to handle our satellites in a reducer

### Task 1:

- Create a new file `/lib/satellites/satellitesReducer.ts`
- Implement (and export) a reducer that holds the list of all currently loaded satellites (define state and actions as types)
- It should handle these actions:
  - `SATELLITES_LOADED`,
  - `SATELLITE_DELETED`,
  - `SATELLITE_UPDATED`,
  - `SATELLITE_CREATED`
- Add additional fields to your actions when required.
- Replace the satellites state in `App.tsx` with your reducer
- Think about:
  - What happens when we add other action types
  - What are the advantages and disadvantages in passing around dispatch instead of specific functions for update/delete etc.











## Tips & Tricks

### discriminated union & exhaustivenes checks

We know all allowed action types, so that we should be able to make sure, that we handle all possible actions in our reducer, even if we add another action type. After checking all possible options in a union type, we can safely assign the result to never. TypeScript will now complain, when we add another option to the union type.

```tsx

/**
 * Return type is still inferred as HistoryButtonState
 * because default branch returns `never`
 */
function historyReducer(
  state: HistoryButtonState,
  action: HistoryButtonAction
): HistoryButtonState {
  switch (action.type) {
    case "INCREMENT":
      return {
        current: state.current + 1,
        history: [...state.history, state.current],
      };
    case "UNDO":
      return {
        current: state.history[state.history.length - 1],
        history: state.history.slice(0, -1),
      };
    default:
      // When all options are checked, this will not throw a compile error
      assertNever(action);
  }
}

/**
 * Function that returns never
 * Tells TypeScript, that this will never return anything.
 */
function assertNever(value: never): never {
  throw new Error("Should never happen");
}
```










### immer for ergonomic updates

[Docs](https://immerjs.github.io/immer/docs/introduction)

```tsx
import produce from "immer";

function historyReducer(
  state: HistoryButtonState,
  action: HistoryButtonAction
): HistoryButtonState {
  return produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT": {
        draft.history.push(draft.current);
        draft.current++;
        break;
      }
      case "UNDO": {
        const previousValue = draft.history.pop();
        if (previousValue) draft.current = previousValue;
        break;
      }
      default:
        assertNever(action);
    }
  });
}
```










## Exercise 2: Improving your reducer

### Task 1:

- Make sure to use `assertNever` as an exhaustivenes check in your reducer.
- Check that you get a type error, when you add another additional action.
- Use immer's `produce` to rewrite your reducer with safe mutations.
