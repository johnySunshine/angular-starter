import { Injectable } from '@angular/core';
import { SlidingTypes } from './model/sliding';

const [
    viewWidth,
    slidingSpacing,
    horizontalRatio,
    verticalRatio,
    squareRatio
] = [
    1284,
    15,
    9 / 16,
    7 / 5,
    1,
];

@Injectable()
export class UiSlidingPosterService {

    private viewWidthForFullPoster: number;

    /**
     * 计算海报的宽度和高度
     * @param {SlidingTypes} types
     * @returns {any}
     */
    public getPosterStyleWidthTypes(types: SlidingTypes): any {
        let spacingNumber = types - 1;
        let spacingWidth = spacingNumber * slidingSpacing;
        let totalViewPosterWith = viewWidth - spacingWidth;
        let width: number = totalViewPosterWith / types;
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

    public getPosterViewWidth(types: SlidingTypes, posterCounts: number): number {
        let {width} = this.getPosterStyleWidthTypes(types);
        return (width + slidingSpacing) * (posterCounts + 1);
    }

    public getArrowsStyleTop(types: SlidingTypes): number {
        let top: number;
        switch (types) {
            case SlidingTypes.vertical:
                top = 167;
                break;
            case SlidingTypes.horizontal:
                top = 118.5;
                break;
            case SlidingTypes.square:
                top = 118.5;
            default:
                break;
        }
        return top;
    }

    public changeSlidingClass(slidingRef: Element, classAction: string): void {
        if (classAction === 'add') {
            slidingRef.classList.add('smooth-move');
        } else {
            slidingRef.classList.remove('smooth-move');
        }
    }

    public getMaxLocationX(): number {
        return this.viewWidthForFullPoster - (viewWidth + slidingSpacing);
    }

    public getViewWidth4FullPoster(types: SlidingTypes, posterCounts: number): void {
        let {width} = this.getPosterStyleWidthTypes(types);
        let fullPosterViewWidth = width + slidingSpacing;
        this.viewWidthForFullPoster = fullPosterViewWidth * posterCounts;
    }

    public isArrivalsMaxLocationX(initX: number, maxX: number): boolean {
        initX = parseInt(Math.abs(initX).toString(), 10);
        maxX = parseInt(Math.abs(maxX).toString(), 10);
        return initX < maxX;
    }

    public getMoveDistanceForRight(locationX: number): number {
        let moveDistance = viewWidth + slidingSpacing;
        moveDistance = this.residueLocationX(moveDistance, locationX);
        return moveDistance;
    }

    public residueLocationX(moveDistance: number, locationX: number): number {
        let residueDistance = this.viewWidthForFullPoster - viewWidth - (Math.abs(locationX) + slidingSpacing);
        if (residueDistance < moveDistance) {
            return residueDistance;
        }
        return moveDistance;
    }

    public getMoveDistanceForLeft(locationX: number): number {
        let moveDistance = viewWidth + slidingSpacing;
        locationX = Math.abs(locationX);
        return locationX > moveDistance ? moveDistance : locationX;
    }

    public isMinSafeDuration(types: SlidingTypes, locationX: number) {
        locationX = Math.abs(locationX);
        return this.getPosterStyleWidthTypes(types).width < locationX;
    }

}
