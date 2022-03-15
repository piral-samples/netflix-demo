import * as React from "react";
import { MovieTileProps, ShowCaseProps } from "../models/proptypes";
import { ApiData, ApiDataEntry } from "../models/types";

const apiKey = "87dfa1c669eea853da609d4968d294be";

function createMovieTileProps(
  title: ApiDataEntry,
  props: ShowCaseProps
): MovieTileProps {
  return {
    media_type: props.media_type,
    movieId: title.id,
    title: title.name || title.original_title,
    score: title.vote_average,
    overview: title.overview,
    backdrop: `http://image.tmdb.org/t/p/original/${title.backdrop_path}`,
  };
}

function loadContent(url: string, setData: (data: ApiData) => void) {
  const requestUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`;
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

export const Showcase: React.FC<ShowCaseProps> = (props) => {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<ApiData>({});
  const titles = React.useMemo(() => {
    if (data.results) {
      return data.results
        .slice(0, 5)
        .map((title) => (
          <props.MovieTile
            key={title.id}
            {...createMovieTileProps(title, props)}
          />
        ));
    }

    return [];
  }, [data.results]);

  React.useEffect(() => {
    setMounted(true);
    return loadContent(props.url, setData);
  }, [props.url]);

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {data.results ? (
            titles
          ) : (
            <p style={{ color: "gray" }}>nothing found</p>
          )}
        </div>
      </div>
    </div>
  );
};
