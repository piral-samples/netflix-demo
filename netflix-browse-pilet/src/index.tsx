import * as React from "react";
import { Link } from "react-router-dom";
import { PiletApi } from "@smapiot/netflix-piral-demo";
import { MovieTileProps } from "./models/proptypes";
import "./style.scss";

const Browse = React.lazy(() => import("./components/Browse"));

export function setup(app: PiletApi) {
  const MovieTile: React.FC<MovieTileProps> = (props) => (
    <app.Extension name="MovieTile" params={props} />
  );

  const FavoritesButton: React.FC<any> = (props) => (
    <app.Extension name="ListToggle" params={props} />
  );

  const BrowsePage: React.FC = () => (
    <Browse MovieTile={MovieTile} FavoritesButton={FavoritesButton} />
  );
  
  app.registerMenu(() => <Link to="/browse">Browse</Link>);
  
  app.registerPage("/browse", BrowsePage);
}
