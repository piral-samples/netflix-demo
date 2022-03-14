import * as React from "react";
import { Redirect } from "react-router-dom";
import { ComponentsState, ErrorComponentsState } from "piral-core";
import App from "./components/App";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";

export const home: React.FC = () => <Redirect to="/browse" />;

export const layout: Partial<ComponentsState> = {
  Layout: App,
  MenuContainer: Navigation,
  LoadingIndicator: Loading,
  MenuItem: ({ children }) => <li>{children}</li>,
};

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => <div />,
};
