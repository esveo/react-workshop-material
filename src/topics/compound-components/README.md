# CompoundComponents

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
          |
          |  --> Props
         \|/
          '
|--------------------|
|        Lib         |
|--------------------|







|--------------------|
|        App         |
|--------------------|
          |
          |
         \|/
          '
|--------------------|
|        Lib         | --------------|
|--------------------|               |
          |                          |
          |                          |
         \|/                         |
          '                          |
|--------------------|               |
|        App         | < -  -  -  -  | --> Implicit data via context
|--------------------|               |
          |                          |
          |                          |
         \|/                         |
          '                          |
|--------------------|               |
|        Lib         | <-------------|
|--------------------|
```

<!--







 -->

```tsx
// Define the data that is passed implicitly
type CounterContext = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Pass null as default value (we will make sure that null never occurs later)
const CounterContext = createContext<CounterContext | null>(null);

/**
 * Provide custom hook to get access to internal state
 */
function useCounterContext() {
  const contextValue = useContext(CounterContext);

  // Throw error if no context is provided
  // This helps TypeScript to infer the non null value
  if (!contextValue) throw new Error("Must be below a CounterController");
  return contextValue;
}

//
//
//
//
//
//

function CounterController(props: {
  initialCount: number;
  children: ReactNode;
}) {
  const [counterState, setCounterState] = useState(props.initialCount);

  const contextValue: CounterContext = {
    count: counterState,
    increment: () => setCounterState((c) => c + 1),
    decrement: () => setCounterState((c) => c - 1),
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
}

//
//
//
//
//
//
//

/**
 * Library components that consume the context value
 * They could also take props
 */
function CounterDisplay() {
  const { count } = useCounterContext();
  return <span>{count}</span>;
}

function IncrementButton(props: ComponentProps<"button">) {
  const { increment } = useCounterContext();
  return (
    <button {...props} onClick={increment}>
      Increment
    </button>
  );
}

/**
 * Context access via render prop instead of hook is also possible
 */
function CustomCounterDisplay(props: {
  display: (counter: CounterContext) => ReactNode;
}) {
  const context = useCounterContext();
  return props.display(context);
}

function NewApp() {
  return (
    <CounterController initialCount={5}>
      <h1>This is a simple Counter app!</h1>

      <p>
        The current count is <CounterDisplay />
      </p>
      <p>
        You can increment by pressing here: <IncrementButton />
      </p>
    </CounterController>
  );
}
```

<!--






 -->

```
|--------------------|
|        App         |
|--------------------|
          |
          |
         \|/
          '
|--------------------|
|        Lib         | --------------|
|--------------------|               |
          |                          |
          |                          |
         \|/                         |
          '                          |
|--------------------|               |
|        App         | < -  -  -  -  | --> Implicit data via context
|--------------------|               |
          |                          |
          |                          |
         \|/                         |
          '                          |
|--------------------|               |
|        Lib         | <-------------|
|--------------------|
```

<!--






 -->

## Exercise: Build your own form library

### Task 1: Defining some types

- Create a new file `src/app/lib/form/Form.tsx`
- type FormContext:
  - Is a generic type `<TFormData extends Record<any, any>>`
  - Next to formData: `TFormData` it has the additional field
    - updateField: `<TKey extends keyof TFormData>(key: TKey, value: TFormData[TKey]) => void`
    - reset: `() => void`
- Use the following code block to test your FormContext

```ts
type FormContext<TFormData extends Record<any, any>> = {
  /* ... */
};

declare const ctx: FormContext<{ a: number; b: string }>;

const x = ctx.formData.a; // Should infer number on x
const y = ctx.formData.b; // Should infer string on y

ctx.updateField("a", 5);
// any key besides a or b should show an error
// Passing a number to b or a string to a should show an error
```

<!--





 -->

### Task 2: More library code

- Define your ReactContext object with `createContext<FormContext<any> | null>(null)`
- Implement the useFormContext hook. `function useFormContext()`
- Implement the FormController component as a generic component: `function FormController<TFormData extends Record<any, any>>(...)`.
  - It should get the following props:
    - formData: `TFormData`
    - updateFormData: `(newFormData: TFormData) => void`
    - onSubmit: `() => void`
    - onReset: `() => void`
    - children: `ReactNode`
    - className: `string`
  - It should then create the FormContext value (and implement all required fields) and provide it via the Provider
  - It should render an html form within the provider and attach an `onSubmit` handler (handle `e.preventDefault()` inside of the FormController) and the className
  - It should render it's children within the form
- Build your first consumption components
  - `FormSubmitButton`
    - It should forward all props that the Button component from `libs/base-components/Button` can receive to a `Button` element
    - It should add a fixed `type="submit"` to the element.
  - `FormResetButton`
    - It should forward all props that the Button component from `libs/base-components/Button` can receive to a `Button` element
    - It should add a fixed `type="button"` to the element.
    - It should retrieve the formContext and call the `onReset` function on click
- Open `src/app/lib/satellites/SatelliteForm.tsx`
  - Replace `<form>` with `<FormController>` and attach the required props
  - Replace the Reset and Save buttons with `FormSubmitButton` and `FormResetButton`
- Test if your application still works

<!--





 -->

### Task 3: Implement FormTextField

- Create a new component `FormTextField`

  - props:
    - labelContent: `ReactNode`
    - fieldKey: `string` (not really typesafe for now)
  - It should render the `label` and the `input` elements.
    - It is up to you if you want to render the field-wrapper in this component or outside.
  - Attach id (fieldKey), value and onChange to the `input`
  - Replace the name field in `SatelliteForm` with your new `FormTextField` component.

- Check out the `Reducing boilerplate` section of the [Formik docs](https://formik.org/docs/overview#reducing-boilerplate):
  - What is similar to our approach
  - What is different

<!--





 -->

### Optional Task 4:

- Move styles from `SatelliteForm.css` to `Form.css` in `libs/form`
  - Think for your self for which styles this makes sense
  - Which styles belong to the library part
  - Which styles belong to application code
- Implement a FormDropdownSelect
- Implement a FormCheckbox
- Implement a FormRangeSlider
