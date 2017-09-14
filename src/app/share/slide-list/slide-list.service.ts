import { Injectable } from '@angular/core';
import { SlideConfig, SlideTypes } from './model/slide';

const screenWith: number = 1360;
const posterLeft: number = 15;
const verProportion = 7 / 5;
const horProportion = 9 / 16;

@Injectable()
export class SlideListService {

    private _configTypes: SlideTypes;

    private _configSlideCount: number;

    private _viewPosterWidth: number;

    public set _config(slideConfig: SlideConfig) {
        this._configSlideCount = slideConfig.slideCount;
        this._configTypes = slideConfig.slideTypes;
        this._viewPosterWidth = screenWith - (posterLeft * (slideConfig.slideTypes - 1));
    }

    constructor() {
    }

    public calcEveryPosterWidth(): number {
        return this._viewPosterWidth / this._configTypes;
    }

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

    public isAdaptiveImages(): boolean {
        return this._configTypes === 6;
    }

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

    public slideViewWidth(): number {
        return (this.calcEveryPosterWidth() + posterLeft) * (this._configSlideCount + 1);
    }
}
