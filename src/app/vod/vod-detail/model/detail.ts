import { Sliding, Poster } from '../../../sdk';

// 可能还需要补充属性
export interface Detail {
    id: number;
    poster: Poster;
    title: string;
    subTitle: string;
    longDescription: string;
    ratings: number;
    ratingCount?: number;

    originalTitle?: string;
    year?: string;
    genres?: string;
    land?: string;
    languages?: string;
    durations?: string;
    sourceData?: string;
    bgPicture?: string;

    persons?: Sliding;
    stills?: Sliding;
    recommend?: Sliding;
    casts?: Sliding;
}
