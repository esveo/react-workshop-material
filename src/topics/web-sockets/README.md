# WebSockets & type-level programming

- TypeScript is an addon to JavaScript
- TypeScript has to adapt to the dynamic of JavaScript
- TypeScript can minipulate, enrich and inspect types:

```ts
type Action =
  | {
      type: "INCREMENT";
      by: number;
    }
  | {
      type: "DECREMENT";
      by: number;
    };

type ActionsWithReset = Action | { type: "RESET" };

type ActionType = Action["type"];

type IncrementAction = Extract<Action, { type: "INCREMENT" }>;
```

## Understanding web-sockets/types.ts and live-chat/ChatWebSocketProtocol.ts

## Exercise 1

### Task 1

Open `src/app/lib/web-sockets/types.ts`

- Implement a generic type `MessageToClient` that taks a WebSocketProtocol as a generic variable and extracts all types of messages that clients can receive from the protocol.
- Implement a generic type `MessageFromClient` that taks a WebSocketProtocl as a generic variable and extracts all types of messages that clients can send from the protocol.
- Use `MessageToClient` and `MessageFromClient` to define the types `ChatMessageToClient` and `ChatMessageFromClient` in `live-chat/ChatWebSocketProtocol.ts`

<!--





 -->

### Task 2

Open `src/app/live-chat/ChatWidget`:

- Adapt the type of the `messages` state so that it contains a list of messages with the types `NEW_CONNECTION`, `CONNECTION_CLOSED` and `CHAT_MESSAGE`
- Adapt the rendering of the list items in the Chat component to specifically display the contents of all relevant message types in `messages`.

- Adapt the type of the message argument of `handleMessage` so that it can receive objects of type `ChatMessageToClient` and handle all concrete message types in `handleMessage`
- Fix all remaining type errors

<!--





 -->

## Introduction to WebSockets

```tsx
// Built-in browser API
const websocket = new WebSocket("ws://localhost:3002");

websocket.onmessage = (event) => {
  console.log(JSON.parse(event.data));
};

const interval = setInterval(() => {
  websocket.send(JSON.stringify({ x: 1, y: 2 }));
}, 5000);

setTimeout(() => {
  websocket.close();
  clearInterval(interval);
}, 15000);
```

<!--





 -->

WebSocket can not send messages until the open event fired.
Wrapping it in an async function helps making this more ergonomic:

```tsx
export async function getWebSocket(url: string) {
  const webSocket = new WebSocket(url);

  return new Promise<WebSocket>((resolve, reject) => {
    webSocket.onopen = () => resolve(webSocket);
    webSocket.onerror = (err) => reject(err);
  });
}

getWebSocket("ws://localhost:3002").then((webSocket) => {
  const interval = setInterval(() => {
    webSocket.send(JSON.stringify({ x: 1, y: 2 }));
  }, 5000);

  setTimeout(() => {
    webSocket.close();
    clearInterval(interval);
  }, 15000);
});
```

<!--





 -->

### Exercise 2

#### Task 1

- Build and export a custom hook in `src/app/lib/web-sockets/useWebSocket.ts` that provides the following interface
- `function useWebSocket<TProtocol extends WebSocketProtocol>(url: string, onMessage: (message: ...) => void): { send: (message: ...) => void }` and fill in the types for `...`

  - create a ref variable with `const webSocketPromiseRef = useRef<Promise<WebSocket>>();`.
  - create a `webSocketPromise` in an effect with getWebSocket, and place the resuting promise into the ref
    - Wait for the result of the promise and add the message handler
    - Don't forget to disconnect on cleanup of useEffect
    - Think about the dependency array: When do we need this effect to run?
    - What would be the consequences of forgetting the cleanup?
  - Implement the send function that the hook has to return.
  - Would it make sense to optimize the send function? (useMemo/useCallback)

<!--





 -->

#### Task 2

- Build and export a custom hook in `src/app/lib/live-chat/useChat.ts` with the following interface: `function useChat(username: string, onMessage: (message: ...) => void): { send: (message: ...) => void }`
  - Use your new `useWebSocket` hook and provide the correct arguments and type arguments
  - Send the `CONNECT` message in an effect so you are able to send messages.
- Use `useChat` in `src/app/lib/live-chat/ChatWidget.tsx`

- Open your website in two tabs and try sending yourself messages

<!--





 -->

#### Optional Tasks

- Implement a possibility to change your username
- Implement the "shake" feature with a css animation
- Enhance your protocol to add the sender to each message
