import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SlideHeader } from '../model/slide';

@Component({
    selector: 'slide-header',
    template: `
        <div class="slide-header-container">
            <div class="slide-content" (click)="clickShowMore(slideHeader.title)">
                <div class="slide-header-title mat-title">{{slideHeader.title}}
                </div>
                <i class="slide-header-more material-icons md-30 md-light">chevron_right</i>
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
