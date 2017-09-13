import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlideHeader } from '../model/slide';

@Component({
    selector: 'slide-header',
    template: `
    <div class="slide-header-container">
        <div class="slide-content" (click)="clickShowMore(slideHeader.title)">
            <div class="slide-header-title">{{slideHeader.title}}</div>
            <div class="slide-header-more"></div>
        </div>
    </div>
    `,
    styleUrls: ['./slide-header.component.scss']
})

export class SlideHeaderComponent {

    @Input()
    public slideHeader: SlideHeader;

    @Output()
    public posterHeaderShowMore = new EventEmitter();

    public clickShowMore(slideTitle): void {
        this.posterHeaderShowMore.emit(slideTitle);
    }
}