import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Sliding, SlidingTypes } from './model/sliding';
import { UiSlidingPosterService } from './ui-sliding-poster.service';
import { UiSlidingArrowsComponent } from './ui-sliding-arrrows/ui-sliding-arrows.component';

@Component({
    selector: 'ui-sliding-poster',
    templateUrl: 'ui-sliding-poster.component.html',
    styleUrls: ['./ui-sliding-poster.component.scss']
})

export class UiSlidingPosterComponent implements OnInit {

    @Input()
    public sliding: Sliding;

    @Input()
    public slidingType: SlidingTypes;

    @Input()
    public isAdaptive: boolean;

    @Output()
    public onSliding = new EventEmitter();

    @Output()
    public onTopHeader = new EventEmitter<string>();

    @ViewChild(UiSlidingArrowsComponent)
    public uiSlidingArrowsComponent: UiSlidingArrowsComponent;

    public locationX: number = 0;

    public width: number;

    public height: number;

    public viewStyleWidth: number;

    public maxLocationX: number;

    constructor(private uiSlidingService: UiSlidingPosterService,
                private elementRef: ElementRef) {
    }

    public ngOnInit(): void {
        let posterCounts = this.sliding.posterList.length;
        let arrowsTop = this.uiSlidingService.getArrowsStyleTop(this.slidingType);
        let {height, width} = this.uiSlidingService.getPosterStyleWidthTypes(this.slidingType);
        this.viewStyleWidth = this.uiSlidingService.getPosterViewWidth(this.slidingType, posterCounts);
        this.uiSlidingArrowsComponent.eleRefTop = `${arrowsTop}px`;
        this.width = width;
        this.height = height;
    }

    public topHeaderMore(headerTitle: string): void {
        this.onTopHeader.emit(headerTitle);
    }

    public moveViewByArrows(moveDirection: number): void {
        this.uiSlidingService.getViewWidth4FullPoster(this.slidingType, this.sliding.posterList.length);

        let maxLocationX = this.uiSlidingService.getMaxLocationX();

        if (moveDirection === 1 && this.uiSlidingService.isArrivalsMaxLocationX(this.locationX, maxLocationX)) {

            this.locationX -= this.uiSlidingService.getMoveDistanceForRight(this.locationX);

        } else if (moveDirection === -1) {
            let otherCondition = this.locationX < 0 && this.uiSlidingService.isMinSafeDuration(this.slidingType, this.locationX);
            if (otherCondition) {
                this.locationX += this.uiSlidingService.getMoveDistanceForLeft(this.locationX);
            }
        }
    }

}
