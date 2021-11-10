import * as React from "react";
import { Redirect } from "react-router-dom";
import { ComponentsState, ErrorComponentsState } from "piral";
import Navigation from "./components/Navigation";
import App from "./components/App";
import { Link } from "react-router-dom";

export const layout: Partial<ComponentsState> = {
  Layout: App,
  MenuContainer: Navigation,
  MenuItem: ({ children }) => <li>{children}</li>,
  DashboardContainer: () => <Redirect to="/browse" />,
};

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the homepage</Link>.
      </p>
    </div>
  ),
};
