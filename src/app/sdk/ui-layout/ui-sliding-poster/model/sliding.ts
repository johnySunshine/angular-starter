import { Poster } from '../../ui-poster/model/ui-poster';

export interface TopHeader {
    title?: string;
    count?: number;
}

export interface Sliding {
    topHeader?: TopHeader;
    posterList?: Poster[];
}

export enum SlidingTypes {
    horizontal = 4,
    square = 7,
    vertical = 6
}