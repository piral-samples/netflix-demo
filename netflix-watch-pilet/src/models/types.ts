export interface ApiData {
    results?: ApiDataEntry[]
}

export interface ApiDataEntry {
    name: string;
    original_title: string;
    id: string;
    vote_average: string;
    overview: string;
    backdrop_path: string;
}

export interface User {
    userId: number;
    name: string;
    avatarId?: string;
    imageUrl?: string;
}