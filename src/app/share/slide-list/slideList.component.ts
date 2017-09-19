import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Slide, SlideTypes } from './model/slide';
import { SlideListService } from './slide-list.service';
import { Poster } from '../playbill-poster/model/poster';
import { SlideArrowsComponent } from './slide-arrows/slide-arrows.component';

@Component({
    selector: 'slide-list',
    templateUrl: 'slide-list.component.html',
    styleUrls: ['./slide-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SlideListComponent implements OnInit {

    @Input()
    public types: SlideTypes;

    @Input()
    public showSlide: Slide;

    @Input()
    public multipleMove: number = 1;

    @Output()
    public showAllMore = new EventEmitter();

    public adaptiveImages: boolean = true;

    public slidesWidth: number;

    public posterList: Poster[] = [];

    @ViewChild(SlideArrowsComponent)
    public slideArrows: SlideArrowsComponent;

    private _offsetX: number;

    private _initOffsetX: number;
    private _startDrag: boolean;
    private _viewLeftX: number;
    private el: HTMLElement;
    private _draged: boolean;

    constructor(private slideService: SlideListService, private elementRef: ElementRef) {
        this.el = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        let posterCount: number = this.showSlide.playbillPosters.length;
        this.slideService._config = {
            slideCount: posterCount,
            slideTypes: this.types,
            slides: this.showSlide.playbillPosters
        };

        this.posterList = this.slideService.conversePosterData();
        this.adaptiveImages = this.slideService.isAdaptiveImages();
        this.slidesWidth = this.slideService.slideViewWidth();
        this.slideArrows.elTop = `${this.slideService.arrowsTop()}px`;
        this._offsetX = 0;
        this.slideArrows.isShowRight = this.isShowArrows4Right(this.types);
        this.addClass();
    }

    /**
     * 左右箭头的点击事件
     * @param {number} moveIndex
     */
    public moveIndex(moveIndex: number): void {
        this.slideService.offCount = this.showSlide.playbillPosters.length;
        this.slideService.offsetX = this._offsetX;
        this.slideService.multipleMove = this.multipleMove;

        let maxOffsetX: number = this.slideService.maxOffsetX(this.types);

        let intOffsetX = this.slideService.converseInt(this._offsetX);
        let intMaxOffsetX = this.slideService.converseInt(maxOffsetX);

        if (moveIndex === 1 && intOffsetX < intMaxOffsetX) {
            this._offsetX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
            this.statusLeftArrows(true);
            this.statusRightArrows(this.slideService.isRightShownOneByOne(this._offsetX, this.types));
        }
        if (moveIndex === -1) {
            this.statusRightArrows(true);
            if (this._offsetX < 0 && this._calcSafety()) {
                this._offsetX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
            }
            if (!this._calcSafety()) {
                this.statusLeftArrows(false);
            }
        }
    }

    /**
     * 每张海报的点击事件
     * @param {number} movieId
     */
    public showMoreDetail(movieId: number): void {
        console.log(movieId);
    }

    /**
     * 展示全部
     * @param {string} slideTitle
     */
    public showAll(slideTitle: string): void {
        this.showAllMore.emit(slideTitle);
    }

    /**
     * 鼠标mousedown事件
     * @param event
     */
    public slideMD(event): void {
        this._initOffsetX = event.screenX;
        this._viewLeftX = this._offsetX;
        this._startDrag = true;
    }

    /**
     * 移动事件
     * @param event
     */
    public slideMM(event): void {
        if (!this._startDrag) {
            return;
        }
        let moveOffsetX = event.screenX;
        let maxOffsetX: number = this.slideService.maxOffsetX(this.types);
        let intMaxOffsetX = this.slideService.converseInt(maxOffsetX);
        let isMoveLeftDirection = this.slideService.moveDirection(this._initOffsetX, moveOffsetX);
        let canRightMove = this.slideService.isCanRightMove(this.posterList.length, this.types);
        this._draged = true;
        this.removeClass();
        if (!isMoveLeftDirection) {
            if (-this._offsetX < intMaxOffsetX && canRightMove) {
                this._offsetX = this._viewLeftX + moveOffsetX - this._initOffsetX;
            }
        } else {
            if (this._offsetX < 0) {
                this._offsetX = this._viewLeftX + moveOffsetX - this._initOffsetX;
            }
        }
    }

    public slideMU(): void {
        this._startDrag = false;
        this._offsetX = this.slideService.endIndex(this._offsetX, this.types);
        this.addClass();
        this.statusLeftArrows(this._offsetX < 0);
        this.statusRightArrows(this.slideService.isRightShownOneByOne(this._offsetX, this.types));
        this._draged = false;
    }

    public slideMouseOut() {
        this._startDrag = false;
        this._offsetX = this.slideService.endIndex(this._offsetX, this.types);
        this.addClass();
        this.statusLeftArrows(this._offsetX < 0);
        this.statusRightArrows(this.slideService.isRightShownOneByOne(this._offsetX, this.types));
    }

    private _calcSafety(): boolean {
        let everyPosterWidth = this.slideService.calcEveryPosterWidth(this.types);
        let intOffsetX = this.slideService.converseInt(this._offsetX);
        return everyPosterWidth < intOffsetX;
    }

    private isShowArrows4Right(types: SlideTypes): boolean {
        let posterCount: number = this.showSlide.playbillPosters.length;
        if (types === SlideTypes.horizontal) {
            return posterCount > 4;
        }
        if (types === SlideTypes.vertical) {
            return posterCount > 6;
        }
        return posterCount > 7;
    }

    private statusLeftArrows(isShown: boolean) {
        this.slideArrows.isShowLeft = isShown;
    }

    private statusRightArrows(isShown: boolean) {
        this.slideArrows.isShowRight = isShown;
    }

    private removeClass() {
        let slidesEle = this.el.getElementsByClassName('slides')[0];
        slidesEle.classList.remove('animated');
    }

    private addClass() {
        let slidesEle = this.el.getElementsByClassName('slides')[0];
        slidesEle.classList.add('animated');
    }
}
