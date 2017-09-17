import {
    AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Slide, SlideHeader, SlideTypes } from './model/slide';
import { SlideListService } from './slide-list.service';
import { Poster } from '../playbill-poster/model/poster';
import { SlideArrowsComponent } from './slide-arrows/slide-arrows.component';

console.log('SlideListComponent');

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

    constructor(private slideService: SlideListService) {
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
    }

    public moveIndex(moveIndex: number): void {
        this.slideService.offCount = this.showSlide.playbillPosters.length;
        this.slideService.offsetX = this._offsetX;
        this.slideService.multipleMove = this.multipleMove;

        let maxOffsetX: number = this.slideService.maxOffsetX(this.types);

        let intOffsetX = this._converseInt(this._offsetX);
        let intMaxOffsetX = this._converseInt(maxOffsetX);

        if (moveIndex === 1 && intOffsetX < intMaxOffsetX) {
            this._offsetX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
            this.slideArrows.isShowLeft = true;
            this.checkArrowsRightOneByOne();
        }
        if (moveIndex === -1) {
            this.slideArrows.isShowRight = true;
            if (this._offsetX < 0 && this._calcSafety()) {
                this._offsetX += this.slideService.moveOffsetX(moveIndex, this.types, this.multipleMove);
            }
            if (!this._calcSafety()) {
                this.slideArrows.isShowLeft = false;
            }
        }
    }

    public showDetail(movieId: number): void {
    }

    public showAll(slideTitle: string): void {
        this.showAllMore.emit(slideTitle);
    }

    private _calcSafety(): boolean {
        let everyPosterWidth = this.slideService.calcEveryPosterWidth(this.types);
        let intOffsetX = this._converseInt(this._offsetX);
        return everyPosterWidth < intOffsetX;
    }

    private _converseInt(defaultNumber: number): number {
        return Number.parseInt(Math.abs(defaultNumber) + '', 10);
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

    private checkArrowsRightOneByOne(): void {
        let slidesOffsetX = this.slideService.slideViewWidth(this.types);
        let everyPosterWidth = this.slideService.calcEveryPosterWidth(this.types);
        let intOffsetX = Math.abs(this._offsetX);
        let residueRight = slidesOffsetX - intOffsetX - (1360 + 15) - 15;
        this.slideArrows.isShowRight = Number.parseInt(residueRight + '', 10) > Number.parseInt(everyPosterWidth + '', 10);
    }
}
