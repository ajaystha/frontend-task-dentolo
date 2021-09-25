import { ReactElement, ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
}

function ListItem({ children }: ListItemProps): ReactElement {
  return <li className="green-blue-list-item">{children}</li>;
}

export default ListItem;
