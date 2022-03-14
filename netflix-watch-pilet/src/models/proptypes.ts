import { FC } from "react";

export interface MovieTileProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
  movieId: string;
  media_type: "tv" | "movie";
  Toggle?: FC<ToggleProps>;
}

export interface ToggleProps extends MovieTileProps {}

export interface PlayerProps {
  video_id: string;
  media_type: "tv" | "movie";
}
