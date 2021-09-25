import { ReactElement } from "react";

import { User } from "@shared/types";

import ListItem from "./ListItem";

interface UsersListProps {
  users: User[];
}

function UsersList({ users }: UsersListProps): ReactElement {
  return (
    <>
      <h5>Results</h5>

      <ul className="green-blue-list">
        {users.map((usr) => (
          <ListItem>
            <span className="listing">{usr.name}</span>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
