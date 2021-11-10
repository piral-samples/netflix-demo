import * as React from "react";
import { Link } from "react-router-dom";
import { MovieTileProps } from "../models/proptypes";

export const MovieTile: React.FC<MovieTileProps> = (props) => {
  const backDrop = props.backdrop.match(/.*(null|undefined)$/)
    ? "https://i.imgur.com/QVaMho2.png"
    : props.backdrop;

  return (
    <div
      className="MovieTile"
      id={props.movieId}
      data-mediatype={props.media_type}
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="overlay">
        <Link to={`/watch/${props.media_type}/${props.movieId}`}>
          <div className="title">{props.title}</div>
          <div className="rating">{props.score} / 10</div>
          <div className="plot">{props.overview}</div>
        </Link>
        <props.Toggle {...props} />
      </div>
    </div>
  );
};
