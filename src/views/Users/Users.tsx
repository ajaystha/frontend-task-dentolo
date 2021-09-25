import { ReactElement, useState, useEffect } from "react";
import useSWR from "swr";

import { fetcher } from "@api/http";
import { User } from "@shared/types";

import UsersList from "./UsersList";

import s from "./Users.module.css";

function Users(): ReactElement {
  const [users, setUsers] = useState<User[]>([]);

  const { data } = useSWR("/users", fetcher);

  useEffect(() => {
    if (!data) return;

    const u = data.slice(0, 5);

    setUsers([...u]);
  }, [data]);

  return (
    <div className={`shadow-01dp ${s.UserContainer}`}>
      <UsersList users={users} />
    </div>
  );
}

export default Users;
