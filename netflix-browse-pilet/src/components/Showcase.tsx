import * as React from "react";
import { MovieTileProps, ShowCaseProps } from "../models/proptypes";
import { ApiData, ApiDataEntry } from "../models/types";

const apiKey = "87dfa1c669eea853da609d4968d294be";

const createMovieTileProps = (title: ApiDataEntry, props: ShowCaseProps) => ({
  media_type: props.media_type,
  movieId: title.id,
  title: title.name || title.original_title,
  score: title.vote_average,
  overview: title.overview,
  backdrop: `http://image.tmdb.org/t/p/original/${title.backdrop_path}`,
});

export const Showcase: React.FC<ShowCaseProps> = (props) => {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<ApiData>({});

  const loadContent = () => {
    const requestUrl =
      "https://api.themoviedb.org/3/" + props.url + "&api_key=" + apiKey;
    fetch(requestUrl)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  };

  React.useEffect(() => {
    setMounted(true);
    loadContent();
  }, [props.url]);

  let titles: JSX.Element[] = [];

  if (data.results) {
    const slice = data.results.slice(0, 5);
    titles = slice.map((title) => {
      const movieTileProps: MovieTileProps = createMovieTileProps(title, props);
      return (
        <props.MovieTile key={title.id} {...movieTileProps}></props.MovieTile>
      );
    });
  }

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {data.results ? (
            titles
          ) : (
            <p style={{ color: "gray" }}> nothing was found</p>
          )}
        </div>
      </div>
    </div>
  );
};
