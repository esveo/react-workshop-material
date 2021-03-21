# Microfrontends

**Runtime composition of independent sub-applications**

```
|----------------------------------|
|                                  |
|              Shell               |
|                                  |
|      |-------|    |-------|      |
|      | Lib 1 |    | Lib 2 |      |
|      |-------|    |-------|      |
|----------------------------------|
```

## Runtime composition:

- Shell does not need to know about sub-apps at development/build-time
- Could dynamically decide which parts to load

  - Based on permissions
  - Based on license
  - Based on URL
  - ...

- **First decision**: How to load additional libraries?

  - `<script src="url"></script>`
  - `await import(url);`

<!--




 -->

## "Independent"

- 100% idependence is not possible and not what we want

  - **Second decision** How do we setup the loaded library?

    - Conventions via window (Webpack 5 Module Federation does this)
    - Conventions via script-tag itself

  - **Third decision** How do we manage shared dependencies like React?

    - Webpack 5 Module Federations can make this explicit
    - Alternatively: No shared dependencies (with WebComponents for example)

<!--




 -->

## What are the libs?

- Until here, we are able to load and get a reference to a decoubled library

- Possibilities for the library:

  - React Component (shell mounts the component)
  - "Plugins": Shell provides interface so that plugins can inject features

<!--




 -->

## How do we communicate from shell to libs and from lib to libs?

- Props/Function arguments: when shell is able to know about the interface of the plugin/component

- Global Event-Bus (maybe Redux?)

  - Shell and libraries push "arbitrary" events into the global event bus.
  - Shell and libraries register event listeners to react to specific events.

  - Contract:

    - Prevent clashes by prefixes
    - Share types

  - Maximum decoupling

<!--




 -->

## Further Challenges

- Development workflow: Mostly independent

- Contracts are implicit (and thus brittle) or have to be shared/enforced

  - Multiple repositories that publish packages to a registry

    - Differentiate between runtime package and contracts (types)
    - Allows versioning, which may get complex when we have a wide range of active versions

  - Monorepo

    - Holistic view of the complete application while still allowing independent development
    - Contracts may directly be imported through explicit dependencies

- Styles/Themes

  - CSS-in-JS: Communicate theme via default communication channel (like event-bus)
  - Publish css files separately
  - CSS-Variables
