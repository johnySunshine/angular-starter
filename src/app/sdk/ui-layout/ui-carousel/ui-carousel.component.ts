import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Carousel, SwitchType } from './model/ui-carousel';
import { CarouselAnimation } from './ui-carousel.aimation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/throttleTime';

@Component({
    selector: 'ui-carousel',
    templateUrl: 'ui-carousel.component.html',
    styleUrls: ['./ui-carousel.component.scss'],
    animations: [CarouselAnimation]
})

export class UiCarouselComponent implements OnInit, OnDestroy {

    @Input()
    public carousels: Carousel[];

    @Input()
    public delay: number = 3000;

    @Input()
    public isShowBackground: boolean;

    @Input()
    public switchTypes: SwitchType;

    public chosenBgUrl: string;

    @Input()
    public isAutoSwitch: boolean = true;

    @Output()
    public onCarousel = new EventEmitter();

    public curIndex: number;

    public carouselMaxIndex: number;

    public switchSubscribe: any;

    constructor() {
    }

    public ngOnInit(): void {
        this.curIndex = 0;
        this.carouselMaxIndex = this.carousels.length - 1;
        if (this.isAutoSwitch) {
            this.checkIsAutoSwitch();
        }
        if (this.isShowBackground) {
            this.chosenBgUrl = this.carousels[0].url;
        }
    }

    public ngOnDestroy(): void {
        if (this.switchSubscribe) {
            this.switchSubscribe.unsubscribe();
        }
    }

    public checkIsAutoSwitch(): void {
        if (this.switchSubscribe) {
            this.switchSubscribe.unsubscribe();
        }
        let autoSwitchSubject = Observable.interval(this.delay);
        this.switchSubscribe = autoSwitchSubject
            .throttleTime(this.delay)
            .subscribe(() => {
                this.arrowRight();
            });
    }

    public stopAutoThenRestore(): void {
        if (this.isAutoSwitch) {
            this.ngOnDestroy();
            this.checkIsAutoSwitch();
        }

    }

    public imageIndexStyleRef(index: number): string {
        switch (index) {
            case 0:
                return 'curIndex';
            case 1:
                return 'nextIndex';
            case this.carouselMaxIndex:
                return 'prevIndex';
            default:
                return 'offIndex';
        }
    }

    public imagePrevIndexStyleRef(index: number): string {
        switch (index) {
            case this.carouselMaxIndex:
                return 'curIndex';
            case 0:
                return 'nextIndex';
            case this.carouselMaxIndex - 1:
                return 'prevIndex';
            default:
                return 'offIndex';
        }
    }

    public imageNextIndexStyleRef(index: number): string {
        switch (index - this.curIndex) {
            case 0:
                return 'curIndex';
            case 1:
                return 'nextIndex';
            case -1:
                return 'prevIndex';
            default:
                return 'offIndex';
        }
    }

    public imageStateForIndex(index: number): string {
        let imageStateStr: string = 'offIndex';
        if (this.carousels && this.carousels.length > 0) {
            if (this.curIndex === 0) {
                imageStateStr = this.imageIndexStyleRef(index);
            } else if (this.curIndex === this.carouselMaxIndex) {
                imageStateStr = this.imagePrevIndexStyleRef(index);
            } else {
                imageStateStr = this.imageNextIndexStyleRef(index);
            }
        }
        return imageStateStr;
    }

    public arrowRight(): void {
        let carouselLength = this.carousels.length;
        this.curIndex = (this.curIndex + 1) % carouselLength;
        this.stopAutoThenRestore();
        this.getImageUrlWithArrows();
    }

    public arrowLeft(): void {
        let prevIndex = this.curIndex - 1;
        this.curIndex = prevIndex < 0 ? this.carouselMaxIndex : this.curIndex - 1;
        this.stopAutoThenRestore();
        this.getImageUrlWithArrows();
    }

    public getImageUrlWithArrows(): void {
        let chosenCarousel: Carousel;
        if (this.isShowBackground && this.carousels.length > 0) {
            chosenCarousel = this.carousels[this.curIndex];
            this.chosenBgUrl = chosenCarousel.url;
        }
    }

    public positionIndexForCarousel(carouselIndex: number): void {
        this.curIndex = carouselIndex;
    }
}
