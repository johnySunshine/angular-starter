import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { SlideListService } from '../slide-list.service';

@Component({
    selector: 'slide-arrows',
    template: `
        <div class="slide-arrow-container">
            <i class="arrow-left" ripple [centered]="true" [speedFactor]="0.5" (click)="move(-1)"></i>
            <i class="arrow-right" ripple [centered]="true" [speedFactor]="0.5" (click)="move(1)"></i>
        </div>

    `,
    styleUrls: ['./slide-arrow.component.scss']
})

export class SlideArrowsComponent implements OnInit {

    @HostBinding('style.position')
    public elPosition: string = 'absolute';

    @HostBinding('style.top')
    public elTop: string = '0';

    @HostBinding('style.width')
    public elWidth: string = '100%';

    @Output()
    public movePoster = new EventEmitter();

    constructor(private slideService: SlideListService) {
    }

    public ngOnInit(): void {
        console.log(this.elTop);
    }

    public move(moveIndex: number): void {
        this.movePoster.emit(moveIndex);
    }
}