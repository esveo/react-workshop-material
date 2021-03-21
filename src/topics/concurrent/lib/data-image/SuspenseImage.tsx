import { ComponentProps } from "react";
import { useSuspendingImageSrc } from "./useSuspendingImageSrc";

export function SuspenseImage(props: ComponentProps<"img">) {
  const dataUrl = useSuspendingImageSrc(props.src!);

  return <img {...props} src={dataUrl} />;
}
