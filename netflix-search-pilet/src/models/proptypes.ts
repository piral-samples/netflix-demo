export interface SearchProps {
    onSearchChange: Function;
}

export interface SearchResultsProps {
    searchUrl: string;
    MovieTile: React.FC<MovieTileProps>;
}

export interface SearchExtensionProps {
    MovieTile: React.FC<MovieTileProps>;
}

export interface MovieTileProps {
    backdrop: string;
    title: string;
    score: string;
    overview: string;
    movieId: string;
    media_type: 'tv' | 'movie';
}