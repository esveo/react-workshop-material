import {
  BuildWebSocketProtocol,
  MessageFromClient,
  MessageToClient,
} from "../web-sockets/types";

type ServerToClientMessage =
  | {
      type: "NEW_CONNECTION";
      username: string;
    }
  | {
      type: "CONNECTION_CLOSED";
      username: string;
    }
  | {
      type: "ERROR";
      message: string;
    };

type ClientToClientMessage =
  | {
      type: "CHAT_MESSAGE";
      content: string;
    }
  | {
      type: "SHAKE";
    };

type ClientToServerMessage = {
  type: "CONNECT";
  username: string;
};

export type ChatWebSocketProtocol = BuildWebSocketProtocol<
  ServerToClientMessage,
  ClientToClientMessage,
  ClientToServerMessage
>;

export type ChatMessageToClient = MessageToClient<ChatWebSocketProtocol>;

export type ChatMessageFromClient = MessageFromClient<ChatWebSocketProtocol>;
