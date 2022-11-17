import * as React from "react";
import { BrowseProps } from "../models/proptypes";
import { Hero } from "./Hero";
import { Showcase } from "./Showcase";
import showcasesdata from "../data/showcases.yml";
import herodata from "../data/hero.yml";

const Browse: React.FC<BrowseProps> = (props) => {
  const showcases = showcasesdata.map((data, i) => (
    <Showcase MovieTile={props.MovieTile} {...data} key={i} />
  ));

  return (
    <div className="Browse">
      <Hero {...herodata} FavoritesButton={props.FavoritesButton} />
      {showcases}
    </div>
  );
};

export default Browse;
