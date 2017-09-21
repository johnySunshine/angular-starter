import {
    AfterViewInit,
    Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import { Poster, PosterMask } from './model/poster';

@Component({
    selector: 'playbill-poster',
    templateUrl: './playbill-poster.component.html',
    styleUrls: ['./playbill-poster.component.scss']
})

export class PlaybillPosterComponent implements OnInit, AfterViewInit {

    @HostBinding('style.display')
    public elDisplay: string = 'inline-block';

    @Input()
    public poster: Poster;

    @Input()
    public posterMask: PosterMask;

    @Input()
    public adaptiveImages: boolean = true;

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
