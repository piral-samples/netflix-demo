import * as React from "react";
import { FavoriteProps, MovieTileProps } from "../models/proptypes";
import { ApiDataEntry } from "../models/types";

const apiKey = "87dfa1c669eea853da609d4968d294be";

const createMovieTileProps = (title: ApiDataEntry) => ({
  media_type: title.media_type,
  movieId: title.id,
  title: title.name || title.original_title,
  score: title.vote_average,
  overview: title.overview,
  backdrop: `http://image.tmdb.org/t/p/original${title.backdrop_path}`,
});

export const Favorite: React.FC<FavoriteProps> = (props) => {
  const [data, setData] = React.useState<ApiDataEntry>(null);

  React.useEffect(() => {
    let requestUrl = `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=${apiKey}`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [props.id]);

  if (data) {
    const movieTileProps: MovieTileProps = createMovieTileProps(data);
    return <props.MovieTile key={props.id} {...movieTileProps} />;
  }

  return <></>;
};
