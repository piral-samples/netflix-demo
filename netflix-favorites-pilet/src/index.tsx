import * as React from "react";
import { Link } from "react-router-dom";
import { PiletApi } from "@smapiot/netflix-piral-demo";
import { FavoriteToggle } from "./components/FavoriteToggle";
import { MovieTileProps } from "./models/proptypes";
import "./style.scss";

const Favorites = React.lazy(() => import("./components/Favorites"));

export function setup(app: PiletApi) {
  const MovieTile: React.FC<MovieTileProps> = (props) => (
    <app.Extension name="MovieTile" params={props} />
  );

  app.registerMenu("Favorites", () => <Link to="/favorites">Favorites</Link>);

  app.registerPage("/favorites", () => <Favorites MovieTile={MovieTile} />);

  app.registerExtension("ListToggle", ({ params }) => (
    <FavoriteToggle {...params} />
  ));
}
