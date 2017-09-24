import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
    selector: 'slide-arrows',
    template: `
        <div class="slide-arrow-container">
            <a class="arrow-left" md-icon-button aria-hidden="true" (click)="move(-1)"
               *ngIf="isShowLeft">
                <i class="material-icons md-36 md-light">chevron_left</i>
            </a>
            <a class="arrow-right" md-icon-button aria-hidden="true" (click)="move(1)"
               *ngIf="isShowRight">
                <i class="material-icons md-36 md-light">chevron_right</i>
            </a>
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

    public isShowLeft: boolean;

    public isShowRight: boolean;

    public ngOnInit(): void {
    }

    public move(moveIndex: number): void {
        this.movePoster.emit(moveIndex);
    }
}