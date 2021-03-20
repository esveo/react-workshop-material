import { ComponentProps } from "react";
import "./Link.css";

type LinkProps = ComponentProps<"a">;

export function Link(props: LinkProps) {
  return <a {...props} className="app-link"></a>;
}
