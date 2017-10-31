import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ui-sliding-arrows',
    templateUrl: 'ui-sliding-arrows.component.html',
    styleUrls: ['./ui-sliding-arrows.component.scss']
})

export class UiSlidingArrowsComponent implements OnInit {
    @HostBinding('style.top')
    public eleRefTop: string = '0';

    @Output()
    public onMove = new EventEmitter<number>();

    public isShowLeftArrow: boolean;

    public isShowRightArrow: boolean;

    constructor() {
    }

    public ngOnInit(): void {
        this.isShowLeftArrow = false;
        this.isShowRightArrow = false;
    }

    public arrowsMove(moveIndex: number) {
        this.onMove.emit(moveIndex);
    }
}