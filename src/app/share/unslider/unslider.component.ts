import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnSlider } from './model/unslider';

@Component({
    selector: 'unslider',
    templateUrl: 'unslider.component.html',
    styleUrls: ['unslider.component.scss']
})

export class UnsliderComponent implements OnInit {
    @Input()
    public speed: number = 500;

    @Input()
    public delay: number = 3000;

    @Input()
    public isMappingBackground: boolean = false;

    @Input()
    public unSliders: UnSlider[];

    @Output()
    public onUnSlider = new EventEmitter();

    constructor() {
    }

    public ngOnInit(): void {
    }


}