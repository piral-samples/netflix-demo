import { FC } from "react";

export interface SearchProps {
  onSearchChange(url: string): void;
}

export interface SearchResultsProps {
  searchUrl: string;
  MovieTile: FC<MovieTileProps>;
}

export interface SearchExtensionProps {
  MovieTile: FC<MovieTileProps>;
}

export interface MovieTileProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
  movieId: string;
  media_type: "tv" | "movie";
}
