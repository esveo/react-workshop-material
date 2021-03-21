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
