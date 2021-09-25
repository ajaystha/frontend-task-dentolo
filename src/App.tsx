import { ReactElement } from "react";

import Users from "./views/Users/Users";

import s from "./App.module.css";

export default function App(): ReactElement {
  return (
    <div className={s.AppContainer}>
      <Users />
    </div>
  );
}
