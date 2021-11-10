import * as React from "react";
import createPersistedState from "use-persisted-state";
import { User } from "../models/types";
import { Account } from "./Account";

const users = require("../data/users.yml") as Array<User>;

const useUserState = createPersistedState("user");

export const AccountSwitcher: React.FC = () => {
  const [_, setUser] = useUserState<User>(null);

  const accounts = users.map((u) => (
    <Account key={u.userId} user={u} onClickName={() => setUser(u)} />
  ));

  return (
    <div className="AccountSwitcher">
      <div className="wrapper">
        <h1>Who's Watching?</h1>
        <div className="profile-wrap">{accounts}</div>
      </div>
    </div>
  );
};
