import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Poster, PosterMask } from './model/poster';

@Component({
    selector: 'playbill-poster',
    templateUrl: './playbill-poster.component.html',
    styleUrls: ['./playbill-poster.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PlaybillPosterComponent implements OnInit {

    @Input()
    public poster: Poster;

    @Input()
    public posterMask: PosterMask;

    @Output()
    public posterClick = new EventEmitter();

    public isPosterTextContainer: boolean = false;

    constructor() {
    }

    public ngOnInit(): void {
        this.isPosterTextContainer = !!(this.poster.posterTitle && this.poster.posterSubtitle);
    }

    public detailMore(posterId: string): void {
        this.posterClick.emit(posterId);
    }

}