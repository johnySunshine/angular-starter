import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

const ratingStatus: string[] = ['star_border', 'star_half', 'start'];

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

    @Input()
    public ScoringNumber: number;

    public statusPool: string[] = [];
    // 用来确定评分的来源
    @Input()
    public isFromMtime: boolean;

    constructor() {
        for (let i = 0; i < 5; i++) {
            this.statusPool.push(ratingStatus[0]);
        }
    }

    public ngOnInit(): void {
        let rNumber: number = this.ratingNumber;
        let cNumber: string = (rNumber * 5 / this.ScoringNumber).toFixed(1);
        let intNumber = +cNumber.split('.')[0];
        let floatNumber = +cNumber.split('.')[1];
        this.statusPool = _.map(this.statusPool, (status: string, index: number) => {
                if (index <= (intNumber - 1)) {
                    return ratingStatus[2];
                } else {
                    if (floatNumber >= 5 && index === intNumber) {
                        return ratingStatus[1];
                    }
                    return ratingStatus[0];
                }
            }
        );
    }
}