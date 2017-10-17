import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carousel, SwitchType } from './model/ui-carousel';

@Component({
    selector: 'ui-carousel',
    templateUrl: 'ui-carousel.component.html',
    styleUrls: ['./ui-carousel.component.scss']
})

export class UiCarouselComponent implements OnInit {

    @Input()
    public carousels: Carousel[];

    @Input()
    public speed: number = 500;

    @Input()
    public delay: number = 3000;

    @Input()
    public keys: boolean;

    @Input()
    public isShowBackground: boolean;

    @Input()
    public switchTypes: SwitchType;

    @Input()
    public isAutoSwitch: boolean = true;

    @Output()
    public onCarousel = new EventEmitter();

    constructor() {
    }

    public ngOnInit(): void {
    }
}