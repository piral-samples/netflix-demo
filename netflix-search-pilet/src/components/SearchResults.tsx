import * as React from "react";
import { apiKey } from "./constants";
import { MovieTileProps, SearchResultsProps } from "../models/proptypes";
import { ApiData, ApiDataEntry } from "../models/types";

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

export const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<ApiData>({});
  const titles = React.useMemo(() => {
    if (data.results) {
      return data.results.slice(0, 5).map((title) => {
        const movieTileProps: MovieTileProps = createMovieTileProps(title);
        return <props.MovieTile key={title.id} {...movieTileProps} />;
      });
    }

    return [];
  }, [data.results]);

  React.useEffect(() => {
    setMounted(true);
    return loadContent(props.searchUrl, setData);
  }, [props.searchUrl]);

  if (props.searchUrl) {
    return (
      <div className="SearchResults">
        <div className="TitleList" data-loaded={mounted}>
          <div className="Title">
            <div className="titles-wrapper">
              {data.results ? (
                titles
              ) : (
                <p style={{ color: "gray" }}> nothing was found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
