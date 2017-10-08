export interface Poster {
    id: string;
    posterUrl: string;
    width?: string;
    height?: string;
    posterTitle?: string;
    posterSubtitle?: string;
    posterMask?: PosterMask;
    type?: number;
}

export interface PosterMask {
    rating?: number;
    genres?: string;
    duration?: string;
    title?: string;
}
