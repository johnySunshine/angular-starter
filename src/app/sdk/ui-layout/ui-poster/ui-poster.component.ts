import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poster } from './model/ui-poster';

@Component({
    selector: 'ui-poster',
    templateUrl: 'ui-poster.component.html',
    styleUrls: ['./ui-poster.component.scss']
})

export class UiPosterComponent implements OnInit {
    @Input()
    public width: number;

    @Input()
    public height: number;

    @Input()
    public isAdaptive: boolean;

    @Input()
    public uiPoster: Poster;

    @Output()
    public onPoster = new EventEmitter();

    public uiStyle: any;

    public eleRef: HTMLElement;

    public isShowPosterTitleWrap: boolean;

    constructor(private elementRef: ElementRef) {
        this.eleRef = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        this.uiStyle = {
            width: `${this.width}px`,
            height: `${this.height}px`
        };
        this.isShowPosterTitleWrap = !!this.uiPoster.title || !!this.uiPoster.subTitle;
    }

    public posterMore($event, posterId: any) {
        $event.posterId = posterId;
        this.onPoster.emit($event);
    }
}