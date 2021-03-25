# useEffect, useMemo & useCallback

## API

### useEffect

```ts
/**
 * Accepts a function that contains imperative, possibly effectful code.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
```

<!--





 -->

### useMemo

```ts
/**
 * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */
function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
```

**note**: useMemo is no guarantee! React may decide to recompute a value at any time.

<!--





 -->

### useCallback

```ts
/**
 * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
 * has changed.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */
function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: DependencyList
): T;
```

<!--





 -->

## Goal: We want the clock in the upper right hand corner to be up to date.

### Task 1:

- Open `src/TopNav.tsx`
- Create an effect that updates the time state every 100 ms (don't change the type of the state variable)
- **don't forget to stop the interval when the effect is cleaned up!**
- Think about the following topics:
  - Do we need a dependency array?
  - What do we need inside of the dependency array. Which options do we have?
  - What happens when we don't provide the locale in the dependency array?

**This cleanup logic is tedious. Let's build a custom hook that helps us!**

<!--





 -->

### Task 2:

- Create a new custom hook with the following interface: `function useInterval(callback: () => void, delay: number): void`
- Use the hook in the TopNav component to update a state with the current time.
- Think about the following topics:
  - When do we want / when do we have to restart the interval?
  - Does the eslint hooks rule help or is it annoying?
