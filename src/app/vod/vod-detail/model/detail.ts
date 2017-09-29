import { Poster } from '../../../share/playbill-poster';
import { Slide } from '../../../share/slide-list/model/slide';

// 可能还需要补充属性
export interface Detail {
    poster: Poster;
    title: string;
    subTitle: string;
    longDescription: string;
    ratings: number;
    persons?: Slide;
    stills?: Slide;
    recommend?: Slide;
}
