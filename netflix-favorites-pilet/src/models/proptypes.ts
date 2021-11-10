import * as React from 'react';

export interface MovieTileProps {
    backdrop: string;
    title: string;
    score: string;
    overview: string;
    movieId: string;
    media_type: 'tv' | 'movie';
}

export interface FavoritesProps {
    MovieTile: React.FC<MovieTileProps>;
}

export interface FavoriteProps extends FavoritesProps {
    id: string;
    media_type: 'tv' | 'movie';
}

export interface FavoriteToggleProps {
    movieId: string;
    media_type: 'tv' | 'movie';
    full?: boolean;
}