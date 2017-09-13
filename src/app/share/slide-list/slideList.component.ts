import { Component, Input, OnInit } from '@angular/core';
import { SlideHeader } from './model/slide';

@Component({
    selector: 'slide-list',
    templateUrl: 'slide-list.component.html'
})

export class SlideListComponent implements OnInit {

    @Input()
    public showNumber: number;

    public slideHeader: SlideHeader = {
        title: 'ceshi',
        count: 20
    };

    constructor() {
    }

    public ngOnInit(): void {
    }
}