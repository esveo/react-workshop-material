import { unstable_createRoot } from "react-dom";
import type {} from "react-dom/experimental";
import type {} from "react/experimental";
import { App } from "./App";
import "./index.css";

const container = document.querySelector("#app");

unstable_createRoot(container!).render(<App />);
