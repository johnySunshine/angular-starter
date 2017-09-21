import { Injectable } from '@angular/core';
import { SlideConfig, SlideTypes } from './model/slide';
import { Poster } from '../playbill-poster/model/poster';
import * as _ from 'lodash';

const screenWith: number = 1360;
const posterLeft: number = 15;
const verProportion = 7 / 5;
const horProportion = 9 / 16;

@Injectable()
export class SlideListService {

    private _configTypes: SlideTypes;

    private _configSlideCount: number;

    private _viewPosterWidth: number;

    private _slides: Poster[];

    private _offsetX: number;

    private _multipleMove: number;

    /**
     * 设置初始配置
     * @param {SlideConfig} slideConfig
     * @private
     */
    public set _config(slideConfig: SlideConfig) {
        this._configSlideCount = slideConfig.slideCount;
        this._configTypes = slideConfig.slideTypes;
        this._viewPosterWidth = screenWith - (posterLeft * (slideConfig.slideTypes - 1));
        this._slides = slideConfig.slides;
    }

    public set offsetX(offsetX: number) {
        this._offsetX = offsetX;
    }

    public set offCount(counts: number) {
        this._configSlideCount = counts;
    }

    public set multipleMove(multipNumber: number) {
        this._multipleMove = multipNumber;
    }

    /**
     * 计算每张海报的宽度
     * @returns {number}
     */
    public calcEveryPosterWidth(slideTypes?: SlideTypes): number {
        if (slideTypes) {
            let viewPosterWidth = screenWith - (posterLeft * (slideTypes - 1));
            return viewPosterWidth / slideTypes;
        }
        return this._viewPosterWidth / this._configTypes;
    }

    /**
     * 计算每张海报的高度
     * @returns {number}
     */
    public calcEvertPosterHeight(): number {
        if (this._configTypes === SlideTypes.vertical) {
            return this.calcEveryPosterWidth() * verProportion;
        }
        if (this._configTypes === SlideTypes.horizontal) {
            return this.calcEveryPosterWidth() * horProportion;
        }
        if (this._configTypes === SlideTypes.square) {
            return this.calcEveryPosterWidth();
        }
    }

    /**
     * 是否自适应
     * @returns {boolean}
     */
    public isAdaptiveImages(): boolean {
        return this._configTypes === 6;
    }

    /**
     * 两边的箭头的高度
     * @returns {number}
     */
    public arrowsTop(): number {
        if (this._configTypes === SlideTypes.vertical) {
            return 176;
        }
        if (this._configTypes === SlideTypes.horizontal) {
            return 118.5;
        }
        if (this._configTypes === SlideTypes.square) {
            return 118.5;
        }
    }

    /**
     * 海报容器的展示宽度
     * @returns {number}
     */
    public slideViewsWidth(slideTypes?: SlideTypes): number {
        return (this.calcEveryPosterWidth(slideTypes) + posterLeft) * (this._configSlideCount + 1);
    }

    /**
     * 转换海报数据
     * @returns
     */
    public conversePosterData(): any {
        return _.map(this._slides, (poster: Poster) => {
            return {
                id: poster.id,
                posterUrl: poster.posterUrl,
                width: `${this.calcEveryPosterWidth()}px`,
                height: `${this.calcEvertPosterHeight()}px`,
                posterTitle: poster.posterTitle,
                posterSubtitle: poster.posterSubtitle,
                posterMask: {
                    rating: poster.posterMask.rating
                }
            };
        });
    }

    public initMutipleNumber(types: SlideTypes, multipleMove: number): any {
        if (types === SlideTypes.horizontal) {
            return multipleMove > 4 ? 4 : multipleMove;
        }
        if (types === SlideTypes.vertical) {
            return multipleMove > 6 ? 6 : multipleMove;
        }
        if (types === SlideTypes.square) {
            return multipleMove > 7 ? 7 : multipleMove;
        }
    }

    public moveOffsetX(moveDirective: number, types: SlideTypes, multipleMove: number): number {
        let posterWidth = this.calcEveryPosterWidth(types);

        let moveDistance = (posterLeft + posterWidth) * this.initMutipleNumber(types, multipleMove);
        if (moveDirective === 1 && this.residueViewOffset(types) < moveDistance) {
            moveDistance = this.residueViewOffset(types);
        }
        if (moveDirective === -1) {
            let offsetX = Math.abs(this._offsetX);
            let standardOffset = (posterWidth + posterLeft) * this._multipleMove;
            if (offsetX < standardOffset) {
                moveDistance = offsetX;
            }
        }
        return -moveDirective * moveDistance;
    }

    public maxOffsetX(types: SlideTypes) {
        let posterWidth = this.calcEveryPosterWidth(types);
        let posterViewWidth = (posterWidth + posterLeft) * this._configSlideCount;
        return posterViewWidth - screenWith - posterLeft;
    }

    public residueViewOffset(types: SlideTypes) {
        let posterWidth = this.calcEveryPosterWidth(types);
        let posterViewWidth = (posterWidth + posterLeft) * this._configSlideCount;
        this._offsetX = Math.abs(this._offsetX);
        return posterViewWidth - screenWith - this._offsetX - posterLeft;
    }

    public moveDirection(intOffsetX: number, moveOffsetX: number): boolean {
        return moveOffsetX > intOffsetX;
    }

    public converseInt(defaultNumber: number): number {
        return Number.parseInt(Math.abs(defaultNumber) + '', 10);
    }

    public isCanRightMove(count: number, types: SlideTypes): boolean {
        return count > types;
    }

    /**
     * 结束标记位
     * @param {number} offsetX
     * @param {SlideTypes} types
     * @returns {number}
     */
    public posterLocationXByMouseup(offsetX: number, types: SlideTypes): number {
        let evePosWidth = this.calcEveryPosterWidth(types);
        let indexFloat = offsetX / (evePosWidth + posterLeft);
        return (evePosWidth + posterLeft) * Math.round(indexFloat);
    }

    /**
     * 检查右边的箭头的显示状态
     * @param {number} offsetX
     * @param {SlideTypes} types
     * @returns {boolean}
     */
    public isRightShownOneByOne(offsetX: number, types: SlideTypes): boolean {
        let slidesOffsetX = this.slideViewsWidth(types);
        let everyPosterWidth = this.calcEveryPosterWidth(types);
        let intOffsetX = Math.abs(offsetX);
        let residueRight = slidesOffsetX - intOffsetX - screenWith - posterLeft * 2;
        return Number.parseInt(residueRight + '', 10) > Number.parseInt(everyPosterWidth + '', 10);
    }

}
