import { HeroData, ShowCaseData } from "./types";

export interface BrowseProps {
  FavoritesButton: React.FC<FavoritesButtonProps>;
  MovieTile: React.FC<MovieTileProps>;
}

export interface FavoritesButtonProps {
  movieId: string;
  media_type: "tv" | "movie";
  full: boolean;
}

export interface ShowCaseProps extends ShowCaseData {
  MovieTile: React.FC<MovieTileProps>;
}

export interface HeroProps extends HeroData {
  FavoritesButton: React.FC<FavoritesButtonProps>;
}

export interface MovieTileProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
  movieId: string;
  media_type: "tv" | "movie";
}

export interface HeroButtonProps {
  primary: boolean;
  text: string;
  href?: string;
}
