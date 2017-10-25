import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UiPlayerService } from './ui-player.service';

@Component({
    selector: 'ui-player',
    templateUrl: 'ui-player.component.html',
    styleUrls: ['./ui-player.component.scss']
})

export class UiPlayerComponent implements OnInit {
    @Input()
    public url: string;

    @Input()
    public height: number;

    @Input()
    public width: number;

    public videoRef: any;

    public eleRef: HTMLElement;

    constructor(private elementRef: ElementRef,
                private uiPlayerService: UiPlayerService) {
        this.eleRef = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        this.videoRef = this.eleRef.querySelector('.ui-player-video');
    }
}