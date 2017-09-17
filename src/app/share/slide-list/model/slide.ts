import { Poster } from '../../playbill-poster';

export interface SlideHeader {
    title: string;
}

export interface Slide {
    slideHeader?: SlideHeader;
    playbillPosters?: Poster[];
}

export enum SlideTypes {
    horizontal = 4,
    square = 7,
    vertical = 6
}

export interface SlideConfig {
    slideTypes: SlideTypes;
    slideCount: number;
    slides: Poster[];
}
