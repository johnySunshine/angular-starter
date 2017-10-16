import { Injectable } from '@angular/core';
import { SlidingTypes } from './model/sliding';

/**
 * ui-sliding-poster 服务层
 */
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

    /**
     * 构建整体容器的宽度
     * @param {SlidingTypes} types
     * @param {number} posterCounts
     * @returns {number}
     */
    public getPosterViewWidth(types: SlidingTypes, posterCounts: number): number {
        let {width} = this.getPosterStyleWidthTypes(types);
        return (width + slidingSpacing) * (posterCounts + 1);
    }

    /**
     * 计算左右箭头的高度
     * @param {SlidingTypes} types
     * @returns {number}
     */
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

    /**
     * 计算移动的最大范围
     * @returns {number}
     */
    public getMaxLocationX(): number {
        return this.viewWidthForFullPoster - (viewWidth + slidingSpacing);
    }

    /**
     * 构建出所有海报拼接初的宽度
     * @param {SlidingTypes} types
     * @param {number} posterCounts
     */
    public getViewWidth4FullPoster(types: SlidingTypes, posterCounts: number): void {
        let {width} = this.getPosterStyleWidthTypes(types);
        let fullPosterViewWidth = width + slidingSpacing;
        this.viewWidthForFullPoster = fullPosterViewWidth * posterCounts;
    }

    /**
     * 判断是否到达最大移动的宽度
     * @param {number} initX
     * @param {number} maxX
     * @returns {boolean}
     */
    public isArrivalsMaxLocationX(initX: number, maxX: number): boolean {
        initX = parseInt(Math.abs(initX).toString(), 10);
        maxX = parseInt(Math.abs(maxX).toString(), 10);
        return initX < maxX;
    }

    /**
     * 点击右边箭头向右移动的距离
     * @param {number} locationX
     * @returns {number}
     */
    public getMoveDistanceForRight(locationX: number): number {
        let moveDistance = viewWidth + slidingSpacing;
        moveDistance = this.residueLocationX(moveDistance, locationX);
        return moveDistance;
    }

    /**
     * 向右移动的距离
     * @param {number} moveDistance
     * @param {number} locationX
     * @returns {number}
     */
    public residueLocationX(moveDistance: number, locationX: number): number {
        let residueDistance = this.viewWidthForFullPoster - viewWidth - (Math.abs(locationX) + slidingSpacing);
        if (residueDistance < moveDistance) {
            return residueDistance;
        }
        return moveDistance;
    }

    /**
     * 点击箭头向左移动的距离
     * @param {number} locationX
     * @returns {number}
     */
    public getMoveDistanceForLeft(locationX: number): number {
        let moveDistance = viewWidth + slidingSpacing;
        locationX = Math.abs(locationX);
        return locationX > moveDistance ? moveDistance : locationX;
    }

    /**
     * 最小的安全距离
     * @param {SlidingTypes} types
     * @param {number} locationX
     * @returns {boolean}
     */
    public isMinSafeDuration(types: SlidingTypes, locationX: number) {
        locationX = Math.abs(locationX);
        return this.getPosterStyleWidthTypes(types).width < locationX;
    }

    /**
     * 鼠标拖动的方向
     * @param {number} mouseDownOffsetX
     * @param {number} mouseMoveOffsetX
     * @returns {string}
     */
    public getMoveDirection(mouseDownOffsetX: number, mouseMoveOffsetX: number): string {
        return mouseMoveOffsetX > mouseDownOffsetX ? 'RIGHT' : 'LEFT';
    }

    /**
     * 鼠标抬出，恢复的正确海报的下标
     * @param {number} locationX
     * @param {SlidingTypes} types
     * @returns {number}
     */
    public resetMovePosterIndex(locationX: number, types: SlidingTypes): number {
        let {width} = this.getPosterStyleWidthTypes(types);
        let indexFloat = locationX / (width + slidingSpacing);
        return (width + slidingSpacing) * Math.round(indexFloat);
    }

    /**
     * 是都显示右边的箭头
     * @param {SlidingTypes} types
     * @param {number} posterCounts
     * @returns {boolean}
     */
    public isDisplayRightArrows(types: SlidingTypes, posterCounts: number): boolean {
        return types < posterCounts;
    }

    /**
     * 时刻检测右边箭头的状态
     * @param {number} locationX
     * @param {SlidingTypes} types
     * @param {number} posterCounts
     * @returns {boolean}
     */
    public checkRightArrowsStatus(locationX: number, types: SlidingTypes, posterCounts: number) {
        let getPosterViewWidth = this.getPosterViewWidth(types, posterCounts);
        let {width} = this.getPosterStyleWidthTypes(types);
        locationX = Math.abs(locationX);
        let minRightDuration = getPosterViewWidth - locationX - viewWidth - slidingSpacing * 2;
        return parseInt(minRightDuration.toString(), 10) > parseInt(width.toString(), 10);
    }

}
