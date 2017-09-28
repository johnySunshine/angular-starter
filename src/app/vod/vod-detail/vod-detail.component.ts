import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vod-detail-component',
    templateUrl: './vod-detail.component.html',
    styleUrls: ['./vod-detail.component.scss']
})

export class VodDetailComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
        document.documentElement.scrollTop = 0;
    }
}