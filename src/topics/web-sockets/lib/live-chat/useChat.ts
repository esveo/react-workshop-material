import { useEffect } from "react";
import { useWebSocket } from "../web-sockets/useWebSocket";
import {
  ChatMessageFromClient,
  ChatMessageToClient,
  ChatWebSocketProtocol,
} from "./ChatWebSocketProtocol";

export function useChat(
  username: string,
  onMessage: (message: ChatMessageToClient) => void
): { send: (message: ChatMessageFromClient) => void } {
  const ws = useWebSocket<ChatWebSocketProtocol>(
    "wss://esveo-academy-react-workshop.herokuapp.com/",
    onMessage
  );

  const send = ws.send;

  useEffect(() => {
    send({ type: "CONNECT", username });
  }, [send, username]);

  return ws;
}
