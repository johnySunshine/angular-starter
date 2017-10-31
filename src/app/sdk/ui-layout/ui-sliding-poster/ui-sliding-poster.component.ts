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
    public onSliding = new EventEmitter<any>();

    @Output()
    public onTopHeader = new EventEmitter<string>();

    @ViewChild(UiSlidingArrowsComponent)
    public uiSlidingArrowsComponent: UiSlidingArrowsComponent;
    // 海报移动距离
    public locationX: number = 0;
    // 海报的宽度
    public width: number;
    // 海拔的高度
    public height: number;
    // 容器的宽度
    public viewStyleWidth: number;
    // 鼠标开始按下的屏幕的横向坐标
    public screenXByMousedown: number;
    // 鼠标按下的初始移动距离
    public locationXByMousedown: number;
    // 是否可以拖动
    public isDragWidthMouse: boolean;

    public eleRef: HTMLElement;

    public slidingViewRef: Element;

    constructor(private uiSlidingService: UiSlidingPosterService,
                private elementRef: ElementRef) {
        this.eleRef = elementRef.nativeElement;

    }

    public ngOnInit(): void {
        let posterCounts = this.sliding.posterList.length;
        let arrowsTop = this.uiSlidingService.getArrowsStyleTop(this.slidingType);
        let {height, width} = this.uiSlidingService.getPosterStyleWidthTypes(this.slidingType);
        this.viewStyleWidth = this.uiSlidingService.getPosterViewWidth(this.slidingType, posterCounts);
        this.uiSlidingArrowsComponent.eleRefTop = `${arrowsTop}px`;
        this.width = width;
        this.height = height;
        this.slidingViewRef = this.eleRef.getElementsByClassName('sliding-views')[0];
        this.uiSlidingArrowsComponent.isShowRightArrow = this.uiSlidingService.isDisplayRightArrows(this.slidingType, posterCounts);
    }

    public topHeaderMore(headerTitle: string): void {
        this.onTopHeader.emit(headerTitle);
    }

    public posterShowMore($event: any): void {
        if ($event.screenX === this.screenXByMousedown) {
            this.onSliding.emit($event.posterId);
        }
    }

    /**
     * 箭头的点击事件
     * @param {number} moveDirection
     */
    public moveViewByArrows(moveDirection: number): void {
        this.uiSlidingService.getViewWidth4FullPoster(this.slidingType, this.sliding.posterList.length);

        let maxLocationX = this.uiSlidingService.getMaxLocationX();

        if (moveDirection === 1 && this.uiSlidingService.isArrivalsMaxLocationX(this.locationX, maxLocationX)) {

            this.locationX -= this.uiSlidingService.getMoveDistanceForRight(this.locationX);

            this.showArrowsRef(true, 'left');

            this.showArrowsRef(this.uiSlidingService.checkRightArrowsStatus(this.locationX, this.slidingType, this.sliding.posterList.length), 'right');

        } else if (moveDirection === -1) {
            let isMinSafeDuration = this.uiSlidingService.isMinSafeDuration(this.slidingType, this.locationX);
            let otherCondition = this.locationX < 0 && isMinSafeDuration;
            this.showArrowsRef(true, 'right');
            if (otherCondition) {
                this.locationX += this.uiSlidingService.getMoveDistanceForLeft(this.locationX);
            }
            if (!isMinSafeDuration) {
                this.showArrowsRef(false, 'left');
            }
        }
    }

    public onMouseDown($event) {
        this.screenXByMousedown = $event.screenX;
        this.locationXByMousedown = this.locationX;
        this.isDragWidthMouse = true;
    }

    public onMouseMove($event) {
        if (!this.isDragWidthMouse) {
            return;
        }
        let {screenX} = $event;
        this.uiSlidingService.getViewWidth4FullPoster(this.slidingType, this.sliding.posterList.length);
        let maxLocationX = this.uiSlidingService.getMaxLocationX();
        maxLocationX = parseInt(maxLocationX.toString(), 10);
        let moveDirectionStr = this.uiSlidingService.getMoveDirection(this.screenXByMousedown, screenX);
        this.changeSlidingClass('remove');
        if (moveDirectionStr === 'RIGHT') {
            if (this.locationX < 0) {
                this.locationX = this.locationXByMousedown + screenX - this.screenXByMousedown;
            }
        } else if (moveDirectionStr === 'LEFT') {
            if (this.sliding.posterList.length > this.slidingType && maxLocationX > Math.abs(this.locationX)) {
                this.locationX = this.locationXByMousedown + screenX - this.screenXByMousedown;
            }
        }
    }

    public mousedownOrMouseup(): void {
        this.showArrowsRef(this.locationX < 0, 'left');
        this.isDragWidthMouse = false;
        this.locationX = this.uiSlidingService.resetMovePosterIndex(this.locationX, this.slidingType);
        this.changeSlidingClass('add');
        this.showArrowsRef(this.uiSlidingService.checkRightArrowsStatus(this.locationX, this.slidingType, this.sliding.posterList.length), 'right');
    }

    public onMouseUp() {
        this.mousedownOrMouseup();
    }

    public onMouseOut() {
        this.mousedownOrMouseup();
    }

    public changeSlidingClass(classAction: string): void {
        if (classAction === 'add') {
            this.slidingViewRef.classList.add('smooth');
        } else {
            this.slidingViewRef.classList.remove('smooth');
        }
    }

    public showArrowsRef(isDisplay: boolean, arrows?: string): void {
        if (arrows) {
            if (arrows === 'left') {
                this.uiSlidingArrowsComponent.isShowLeftArrow = isDisplay;
            } else {
                this.uiSlidingArrowsComponent.isShowRightArrow = isDisplay;
            }
        } else {
            this.uiSlidingArrowsComponent.isShowLeftArrow = isDisplay;
            this.uiSlidingArrowsComponent.isShowRightArrow = isDisplay;
        }

    }

}
