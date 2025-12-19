export interface Movie {
    "id": number;
    "title": string;
    "overview": string;
    "poster_path": string;
    "genre_ids": number[];
}

export interface Genre {
    "id": number;
    "name": string;
}

export interface FavoriteButtonProps {
    movieId: string;
}

export interface ButtonProps {
    children: React.ReactNode;
}