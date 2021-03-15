import { ComponentProps } from "react";
import "./Button.css";

export function Button(props: ComponentProps<"button">) {
  return <button {...props} className="satellite-control-button" />;
}
