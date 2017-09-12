import {
    AfterViewInit,
    Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import { Poster, PosterMask } from './model/poster';

@Component({
    selector: 'playbill-poster',
    templateUrl: './playbill-poster.component.html',
    styleUrls: ['./playbill-poster.component.scss'],
    encapsulation: ViewEncapsulation.None
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
    public posterClick = new EventEmitter();

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

    public detailMore(posterId: string): void {
        this.posterClick.emit(posterId);
    }

}
