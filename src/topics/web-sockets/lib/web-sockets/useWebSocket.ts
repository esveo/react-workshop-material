import { useCallback, useEffect, useRef } from "react";
import { getWebSocket } from "./getWebSocket";
import { MessageFromClient, MessageToClient, WebSocketProtocol } from "./types";

export function useWebSocket<TProtocol extends WebSocketProtocol>(
  url: string,
  onMessage: (message: MessageToClient<TProtocol>) => void
): { send: (message: MessageFromClient<TProtocol>) => void } {
  const webSocketPromiseRef = useRef<Promise<WebSocket>>();

  useEffect(() => {
    const webSocketPromise = getWebSocket(url);
    webSocketPromiseRef.current = webSocketPromise;

    webSocketPromise.then((webSocket) => {
      webSocket.onmessage = (event) => {
        onMessage(JSON.parse(event.data));
      };
    });

    return () => {
      webSocketPromise.then((webSocket) => webSocket.close());
    };
  }, [onMessage, url]);

  const send = useCallback((message: MessageFromClient<TProtocol>) => {
    const webSocketPromise = webSocketPromiseRef.current;
    if (!webSocketPromise) throw new Error("WebSocket not initialized yet");

    webSocketPromise.then((webSocket) =>
      webSocket.send(JSON.stringify(message))
    );
  }, []);

  return { send };
}
