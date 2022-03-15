export interface ApiData {
  results?: Array<ApiDataEntry>;
}

export interface ApiDataEntry {
  name: string;
  original_title: string;
  id: string;
  vote_average: string;
  overview: string;
  backdrop_path: string;
}

export interface ShowCaseData {
  url: string;
  title: string;
  media_type: "tv" | "movie";
}

export interface HeroData {
  backgroundUrl: string;
  logoUrl: string;
  title: string;
  text: string;
  movieId: string;
  media_type: "tv" | "movie";
  buttons: { primary: boolean; href: string; text: string }[];
}
