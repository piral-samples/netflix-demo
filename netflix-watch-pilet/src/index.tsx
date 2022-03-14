import * as React from "react";
import { PiletApi } from "@smapiot/netflix-piral-demo";
import { MovieTile } from "./components/MovieTile";
import { ToggleProps } from "./models/proptypes";
import "./style.scss";

const WatchPage = React.lazy(() => import("./components/WatchPage"));

export function setup(app: PiletApi) {
  const Toggle: React.FC<ToggleProps> = (props) => (
    <app.Extension name="ListToggle" params={props} />
  );

  app.registerExtension("MovieTile", (props) => (
    <MovieTile {...props.params} Toggle={Toggle} />
  ));

  app.registerPage("/watch/:media_type/:video_id", WatchPage);
}
