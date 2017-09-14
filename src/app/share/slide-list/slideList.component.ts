import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Slide, SlideHeader, SlideTypes } from './model/slide';
import { SlideListService } from './slide-list.service';
import * as _ from 'lodash';
import { Poster } from '../playbill-poster/model/poster';

@Component({
    selector: 'slide-list',
    templateUrl: 'slide-list.component.html',
    styleUrls: ['./slide-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SlideListComponent implements OnInit {

    @Input()
    public types: SlideTypes;

    @Input()
    public showSlide: Slide;

    public adaptiveImages: boolean = true;

    public slidesWidth: number;

    constructor(private slideService: SlideListService) {

    }

    public ngOnInit(): void {
        let posterCount: number = this.showSlide.playbillPosters.length;
        this.slideService._config = {
            slideCount: posterCount,
            slideTypes: this.types
        };
        _.each(this.showSlide.playbillPosters, (poster: Poster) => {
            poster.width = `${this.slideService.calcEveryPosterWidth()}px`;
            poster.height = `${this.slideService.calcEvertPosterHeight()}px`;
        });
        this.adaptiveImages = this.slideService.isAdaptiveImages();
        this.slidesWidth = this.slideService.slideViewWidth();
    }

    public moveIndex(moveIndex: number): void {
        console.log(moveIndex);
    }

    public showDetail(movieId: number): void {
        console.log(movieId);
    }
}
