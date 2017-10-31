import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopHeader } from '../model/sliding';

@Component({
    selector: 'ui-sliding-header',
    templateUrl: 'ui-sliding-header.component.html',
    styleUrls: ['./ui-sliding-header.component.scss']
})

export class UiSlidingHeaderComponent implements OnInit {
    @Input()
    public topHeader: TopHeader;

    @Output()
    public onHeader = new EventEmitter<string>();

    constructor() {
    }

    public ngOnInit(): void {
    }

    public showMore(topHeaderTitle: string): void {
        this.onHeader.emit(topHeaderTitle);
    }
}