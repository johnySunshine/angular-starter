import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sliding, SlidingTypes } from './model/sliding';

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

    @Output()
    public onSliding = new EventEmitter();

    @Output()
    public onTopHeader = new EventEmitter();

    constructor() {
    }

    public ngOnInit(): void {
    }
}