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
  media_type: "tv" | "movie";
}

export interface FavoritesData {
  [userId: number]: FavoriteData;
}

export interface FavoriteData {
  [movieId: number]: [media_type: "tv" | "movie"];
}

export interface User {
  userId: number;
  name: string;
  avatarId?: string;
  imageUrl?: string;
}
