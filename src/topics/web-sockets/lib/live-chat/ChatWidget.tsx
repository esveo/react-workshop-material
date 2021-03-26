import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../base-components/Button";
import { ChatMessageToClient } from "./ChatWebSocketProtocol";
import "./ChatWidget.css";
import { useChat } from "./useChat";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">
      {open && <Chat />}
      <Button onClick={() => setOpen((o) => !o)}>
        {open ? "Hide" : "Show"} Chat
      </Button>
    </div>
  );
}

type MessageToDisplay = Extract<
  ChatMessageToClient,
  { type: "NEW_CONNECTION" | "CONNECTION_CLOSED" | "CHAT_MESSAGE" }
>;

const username = `Random user ${Math.round(Math.random() * 999)}`;

function Chat() {
  const [messages, setMessages] = useState<MessageToDisplay[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessage = useCallback((message: ChatMessageToClient) => {
    switch (message.type) {
      case "CHAT_MESSAGE":
      case "CONNECTION_CLOSED":
      case "NEW_CONNECTION":
        setMessages((m) => [...m, message]);
        break;
      case "SHAKE":
        alert("Shake!");
        break;
      case "ERROR":
        console.error(message.message);
        break;
      default:
        assertNever(message);
    }
  }, []);

  const chat = useChat(username, handleMessage);

  function handleSend(e: FormEvent) {
    e.preventDefault();

    setMessages((m) => [...m, { type: "CHAT_MESSAGE", content: input }]);
    chat.send({ type: "CHAT_MESSAGE", content: input });
    setInput("");
  }

  return (
    <div className="chat-container">
      <ul ref={listRef}>
        {messages.map((m, i) => (
          <li key={i}>
            <ChatMessage message={m} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

function ChatMessage(props: { message: MessageToDisplay }) {
  switch (props.message.type) {
    case "CHAT_MESSAGE":
      return <React.Fragment>{props.message.content}</React.Fragment>;
    case "NEW_CONNECTION":
      return (
        <React.Fragment>
          {props.message.username} joined the chat.
        </React.Fragment>
      );
    case "CONNECTION_CLOSED":
      return (
        <React.Fragment>{props.message.username} left the chat.</React.Fragment>
      );
    default:
      assertNever(props.message);
  }
}

function assertNever(value: never): never {
  throw new Error("Should never happen");
}
