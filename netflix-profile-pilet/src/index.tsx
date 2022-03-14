import * as React from "react";
import { PiletApi } from "@smapiot/netflix-piral-demo";
import { ProfileExtension } from "./components/ProfileExtension";
import "./scss/style.scss";

const ProfilePage = React.lazy(() => import("./components/ProfilePage"));

export function setup(app: PiletApi) {
  app.registerExtension("header-items", ProfileExtension);

  app.registerPage("/profile", ProfilePage);
}
