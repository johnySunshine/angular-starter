import { Injectable } from '@angular/core';
import { SlidingTypes } from './model/sliding';

const viewWidth: number = 1284;
const slidingSpacing: number = 15;
const horizontalRatio: number = 9 / 16;
const verticalRatio: number = 7 / 5;
const squareRatio: number = 1;

@Injectable()
export class UiSlidingPosterService {
    /**
     * 计算海报的宽度和高度
     * @param {SlidingTypes} types
     * @returns {any}
     */
    public getPosterStyleWithTypes(types: SlidingTypes): any {
        let spacingNumber = types - 1;
        let spacingWidth = spacingNumber * slidingSpacing;
        let totalViewPosterWith = viewWidth - spacingWidth;
        let width: number = viewWidth / totalViewPosterWith;
        let height: number;
        switch (types) {
            case SlidingTypes.vertical:
                height = width * verticalRatio;
                break;
            case SlidingTypes.horizontal:
                height = width * horizontalRatio;
                break;
            case SlidingTypes.square:
                height = width * squareRatio;
            default:
                break;
        }
        return {width, height};
    }
}
