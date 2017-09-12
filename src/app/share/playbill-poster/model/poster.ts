export interface Poster {
    width: string;
    height: string;
    id: string;
    posterUrl: string;
    posterTitle?: string;
    posterSubtitle?: string;
}

export interface PosterMask {
    rating?: number;
    genres?: string;
    duration?: string;
    title?: string;
}
