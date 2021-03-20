export type WebSocketMessage = {
  type: string;
};

export type BuildWebSocketProtocol<
  TServerToClientMessage extends WebSocketMessage,
  TClientToClientMessage extends WebSocketMessage,
  TClientToServerMessage extends WebSocketMessage
> = {
  ServerToClientMessage: TServerToClientMessage;
  ClientToServerMessage: TClientToServerMessage;
  ClientToClientMessage: TClientToClientMessage;
};

export type WebSocketProtocol = BuildWebSocketProtocol<
  WebSocketMessage,
  WebSocketMessage,
  WebSocketMessage
>;

export type MessageToClient<Protocol extends WebSocketProtocol> =
  | Protocol["ClientToClientMessage"]
  | Protocol["ServerToClientMessage"];

export type MessageFromClient<Protocol extends WebSocketProtocol> =
  | Protocol["ClientToClientMessage"]
  | Protocol["ClientToServerMessage"];
