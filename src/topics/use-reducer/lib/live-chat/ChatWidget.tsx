import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../base-components/Button";
import "./ChatWidget.css";

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

function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessage = useCallback((message: any) => {
    setMessages((m) => [...m, message]);
  }, []);

  function handleSend(e: FormEvent) {
    e.preventDefault();

    setMessages((m) => [...m, input]);

    setInput("");
  }

  return (
    <div className="chat-container">
      <ul ref={listRef}>
        {messages.map((m, i) => (
          <li key={i}>{JSON.stringify(m, null, 2)}</li>
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
