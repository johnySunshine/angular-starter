import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit {

    @Input()
    public ratingNumber: number;

    @Input()
    public ratingSourceNumber: number;

    constructor() {
    }

    public ngOnInit(): void {

    }
}