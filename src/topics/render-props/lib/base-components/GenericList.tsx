import { ReactNode } from "react";

export function GenericList<TItem>(props: {
  className: string;
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
  onItemClick: (item: TItem) => void;
  getItemClassName: (item: TItem) => string;
  getItemKey: (item: TItem) => string;
}) {
  return (
    <ul className={props.className}>
      {props.items.map((item) => (
        <li
          key={props.getItemKey(item)}
          onClick={() => props.onItemClick(item)}
          className={props.getItemClassName(item)}
        >
          {props.renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
