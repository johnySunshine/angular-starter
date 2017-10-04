import {
    AfterViewInit,
    Component, ElementRef, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { Poster, PosterMask } from './model/poster';

@Component({
    selector: 'playbill-poster',
    templateUrl: './playbill-poster.component.html',
    styleUrls: ['./playbill-poster.component.scss']
})

export class PlaybillPosterComponent implements OnInit, AfterViewInit {

    @Input()
    public poster: Poster;

    @Input()
    public posterMask: PosterMask;

    @Input()
    public adaptiveImages: boolean = true;

    @Input()
    public posterTypes: string = 'movie';

    @Output()
    public onPosterClick = new EventEmitter();

    public isPosterTextContainer: boolean = false;

    public el: HTMLElement;

    constructor(private elementRef: ElementRef) {
        this.el = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        this.isPosterTextContainer = !!(this.poster.posterTitle && this.poster.posterSubtitle);

    }

    public ngAfterViewInit(): void {
    }

    public detailMore($clickEvent, posterId: string): void {
        $clickEvent.posterId = posterId;
        this.onPosterClick.emit($clickEvent);
    }

}
