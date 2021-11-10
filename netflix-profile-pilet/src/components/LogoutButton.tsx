import * as React from "react";
import { Link } from "react-router-dom";

export const LogoutButton: React.FC<{ logoutAction: Function }> = ({
  logoutAction,
}) => (
  <Link className="LogoutButton" to="/" onClick={() => logoutAction()}>
    Log out
  </Link>
);
