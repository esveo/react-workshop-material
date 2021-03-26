# RenderProps

- JSX is a description of a piece of UI
- In order to create a UI on the basis of some JSX, we have to return it from render
- It does not matter where the JSX originated:

```
|--------------------|
|        App         |
|--------------------|
          |
          |  --> Props (including embedding JSX)
         \|/
          '
|--------------------|
|        Lib         |
|--------------------|







|--------------------|
|        App         |
|--------------------|
          |
          |  --> Props (including embedding JSX & a render prop!)
         \|/
          '
|--------------------|
|        Lib         |
|--------------------|
          |
          |  --> Passes data to app code via the render prop
         \|/
          '
|--------------------|
|        App         |
|--------------------|


```

<!--







 -->

**Previously: the children prop**

```tsx
function CounterButton(props: { children: ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      {props.children}: {counter}
    </button>
  );
}

function App() {
  return (
    <CounterButton>
      <h1>You clicked X times</h1>
    </CounterButton>
  );
}
```

<!--







 -->

**Better alternative: A prop that returns JSX (render prop)**

```tsx
function CounterButton(props: { renderContent: (data: number) => ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      {props.renderContent(counter)}
    </button>
  );
}

function App() {
  return (
    <CounterButton
      renderContent={(c) => <>You clicked {c} times.</>}
    ></CounterButton>
  );
}
```

<!--







 -->

## Exercise 1: Making the SatelliteSelect more flexible

### Task 1: Build a new component `SatelliteList`

- Open `src/app/lib/satellites/SatelliteSelect.tsx`
- Create a new component in that file `SatelliteList`
- It should take the following props
  - className: `string`
  - satellites: `Satellite[]`
  - renderSatellite: `(satellite: Satellite) => ReactNode`
  - onSatelliteClick: `(satellite: Satellite) => void`
  - getSatelliteClassName: `(satellite: Satellite) => string`
- It should
  - handle rendering of the `ul` and the `li`-elements
  - attach the correct click listeners and classes to the list items
  - NOT decide how a satellite is rendered (that is decided by the render prop)
- Use the SatelliteList component in your SatelliteSelect to hand off rendering logic of the list.
- Think about:
  - What additional features could be handled by the SatelliteList?
  - How could we make SatelliteList even more generic and reusable?

### Optional Task 2: Virtualized scrolling

- Integrate [react-window](https://react-window.now.sh/#/examples/list/fixed-size) into the SatelliteList component

<!--







 -->

# Generic components

Problem: Wrapper components often don't know on which type of data they operate. Typing these may become hard and you may be inclined to fall back to `any`/`unknown`

## Example use case: `ForEach`

```tsx
type User = { name: string; id: string };

function UserList(props: { users: User[] }) {
  return (
    <ul>
      <ForEach
        items={props.users}
        item={(user, index) => <li key={user.id}>{user.name}</li>}
      />
    </ul>
  );
}

function ForEach<TItem>(props: {
  items: TItem[];
  item: (item: TItem, index: number) => ReactNode;
}) {
  return <>{props.items.map((item, index) => props.item(item, index))}</>;
}
```

<!--







 -->

## Exercise 2: Refactoring SatelliteList

### Task 1

- Copy your `SatelliteList` component and refactor this copy:
- Rename it to `GenericList` and make it a generic component with the generic `TItem`
- Replace all occurrences of `Satellite` with `TItem`
- Rename all satelliteXYZ variables into itemXYZ
- Add additional strategy functions where required
- Use this `GenericList` in your SatelliteSelect component
- Move `GenericList` to `src/app/lib/base-components` as this is now a completely reusable component

### Optional Task 2

- Integrate a text filter into `GenericList` and let users (Application Code) decide if a given item matches the current filter.

### Optional Task 3

- Build a GenericSelect component, that uses GenericList internally and attaches required props and classes to manage the selection state
