export async function getWebSocket(url: string) {
  const webSocket = new WebSocket(url);

  return new Promise<WebSocket>((resolve, reject) => {
    webSocket.onopen = () => resolve(webSocket);
    webSocket.onerror = (err) => reject(err);
  });
}
