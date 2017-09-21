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
    public onShowMore = new EventEmitter();

    @Output()
    public onPoster: EventEmitter<number> = new EventEmitter();

    public adaptiveImages: boolean = true;

    public slideViewsWidth: number;

    public posterList: Poster[] = [];

    @ViewChild(SlideArrowsComponent)
    public slideArrows: SlideArrowsComponent;
    // 海报容器的位置
    public slideLocationX: number;
    // 海报容器初始化位置
    public LocationXByMouseDown: number;
    // 是否可以通过鼠标拖拽
    public isCanDragWithMouse: boolean;
    // 通过鼠标 mousedown 构建的初始位置
    public initLocationXByMouseDown: number;

    public eleRef: HTMLElement;

    public slidesRef: any;

    public posterCounts: number;

    constructor(private slideService: SlideListService,
                private elementRef: ElementRef) {
        this.eleRef = elementRef.nativeElement;

    }

    public ngOnInit(): void {
        let slidesService = this.slideService;
        this.slidesRef = this.eleRef.getElementsByClassName('slides')[0];

        this.posterCounts = this.showSlide.playbillPosters.length;
        this.slideService._config = {
            slideCount: this.posterCounts,
            slideTypes: this.types,
            slides: this.showSlide.playbillPosters
        };

        this.posterList = slidesService.conversePosterData();
        this.adaptiveImages = slidesService.isAdaptiveImages();
        this.slideViewsWidth = slidesService.slideViewsWidth();
        this.slideArrows.elTop = `${slidesService.arrowsTop()}px`;
        this.slideLocationX = 0;
        this.slideArrows.isShowRight = this.isShowArrows4Right(this.types);
        this._addSlidesClass();
    }

    /**
     * 左右箭头的点击事件
     * @param {number} moveIndex
     */
    public moveIndex(moveIndex: number): void {
        this.slideService.offCount = this.posterCounts;
        this.slideService.offsetX = this.slideLocationX;
        this.slideService.multipleMove = this.multipleMove;

        let maxOffsetX: number = this.slideService.maxOffsetX(this.types);

        let intOffsetX = this.slideService.converseInt(this.slideLocationX);
        let intMaxOffsetX = this.slideService.converseInt(maxOffsetX);

        if (moveIndex === 1 && intOffsetX < intMaxOffsetX) {
            this.slideLocationX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
            this.statusLeftArrows(true);
            this.statusRightArrows(this.slideService.isRightShownOneByOne(this.slideLocationX, this.types));
        }
        if (moveIndex === -1) {
            this.statusRightArrows(true);
            if (this.slideLocationX < 0 && this._calcSafety()) {
                this.slideLocationX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
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
    public showMoreDetail(mouseEvent): void {
        if (mouseEvent.screenX === this.LocationXByMouseDown) {
            this.onPoster.emit(mouseEvent.posterId);
        }

    }

    /**
     * 展示全部
     * @param {string} slideTitle
     */
    public headerMore(slideTitle: string): void {
        this.onShowMore.emit(slideTitle);
    }

    /**
     * 鼠标mousedown事件
     * @param event
     */
    public onMouseDown(event): void {
        this.LocationXByMouseDown = event.screenX;
        this.initLocationXByMouseDown = this.slideLocationX;
        this.isCanDragWithMouse = true;
    }

    /**
     * 移动事件
     * @param event
     */
    public onMouseMove(event): void {
        if (!this.isCanDragWithMouse) {
            return;
        }
        let moveOffsetX = event.screenX;
        let maxOffsetX: number = this.slideService.maxOffsetX(this.types);
        let intMaxOffsetX = this.slideService.converseInt(maxOffsetX);
        let isMoveLeftDirection = this.slideService.moveDirection(this.LocationXByMouseDown, moveOffsetX);
        let canRightMove = this.slideService.isCanRightMove(this.posterList.length, this.types);
        this._removeSlidesClass();
        if (!isMoveLeftDirection) {
            if (-this.slideLocationX < intMaxOffsetX && canRightMove) {
                this.slideLocationX = this.initLocationXByMouseDown + moveOffsetX - this.LocationXByMouseDown;
            }
        } else {
            if (this.slideLocationX < 0) {
                this.slideLocationX = this.initLocationXByMouseDown + moveOffsetX - this.LocationXByMouseDown;
            }
        }
    }

    public onMouseUp(): void {
        this.posterLocationX4Ending();
    }

    public onMouseOut() {
        this.posterLocationX4Ending();
    }

    public posterLocationX4Ending() {
        this.slideLocationX = this.slideService.posterLocationXByMouseup(this.slideLocationX, this.types);
        this._addSlidesClass();
        this.statusLeftArrows(this.slideLocationX < 0);
        this.statusRightArrows(this.slideService.isRightShownOneByOne(this.slideLocationX, this.types));
        this.isCanDragWithMouse = false;
    }

    private _calcSafety(): boolean {
        let pictureWidth = this.slideService.calcEveryPosterWidth(this.types);
        let intOffsetX = this.slideService.converseInt(this.slideLocationX);
        return pictureWidth < intOffsetX;
    }

    private isShowArrows4Right(types: SlideTypes): boolean {
        let posterCount: number = this.posterCounts;
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

    private _addSlidesClass() {
        this.slidesRef.classList.add('animated');
    }

    private _removeSlidesClass() {
        this.slidesRef.classList.remove('animated');
    }
}
