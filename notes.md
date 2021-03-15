# React Workshops

## Basics

## Advanced Topics

All Advanced topic modules are based on the result of the basics module and branch in different directions.

### useEffect + useMemo + useCallback

Clock with useInterval (useEffect to specify interval with delay and callback)

### React Context

Satellites state mit custom hooks. Sonst prop drilling

### useReducer (+ immer)

Satellites state. Not only list of satellite (ids) but also satellites by id.

### useRef + useImperativeHandle

SatellitesSelect scrollToItem/scrollToRow

### RenderProps

SatellitesSelect based on a common list component with generics and strategy pattern

### Compound Components

SatelliteForm:
Form props: { values: T extends Record<string, any>, onSubmit: (formState) => Promise<void> | void }
FormInputField
FormCustomField
FormActions

## Additional Topics

### WebSockets: Typesafe Protocols & imperative APIs

Group Chat Component

### Microfrontends

Group Chat as Runtime dependency


### Suspense for Data Fetching

Integrate an image per satellite id that suspends loading until the image is fully loaded from the url


