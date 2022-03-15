
import * as React from "react";
import { FavoriteProps, MovieTileProps } from "../models/proptypes";
import { ApiDataEntry } from "../models/types";

const apiKey = "87dfa1c669eea853da609d4968d294be";

function createMovieTileProps(title: ApiDataEntry): MovieTileProps {
  return {
    media_type: title.media_type,
    movieId: title.id,
    title: title.name || title.original_title,
    score: title.vote_average,
    overview: title.overview,
    backdrop: `http://image.tmdb.org/t/p/original/${title.backdrop_path}`,
  };
}

function loadContent(url: string, setData: (data: ApiDataEntry) => void) {
  const requestUrl = `https://api.themoviedb.org/3/${url}?api_key=${apiKey}`;
  let active = true;
  fetch(requestUrl)
    .then((res) => res.json())
    .then(
      (data) => active && setData(data),
      (err) => console.error(err)
    );
  return () => {
    active = false;
  };
}

export const Favorite: React.FC<FavoriteProps> = (props) => {
  const [data, setData] = React.useState<ApiDataEntry>(null);

  React.useEffect(() => {
    return loadContent(`${props.media_type}/${props.id}`, setData);
  }, [props.id, props.media_type]);

  if (data) {
    const movieTileProps: MovieTileProps = createMovieTileProps(data);
    return <props.MovieTile key={props.id} {...movieTileProps} />;
  }

  return <></>;
};
