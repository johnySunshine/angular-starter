import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';
import { MenuTypes } from '../../header';

@Component({
    selector: 'vod-detail-component',
    templateUrl: './vod-detail.component.html',
    styleUrls: ['./vod-detail.component.scss']
})

export class VodDetailComponent implements OnInit {
    constructor(private appService: AppState) {
    }

    public ngOnInit() {
        document.documentElement.scrollTop = 0;
        this.appService.triggerMenusEvent({
            status: MenuTypes.detail,
            menuData: {
                menuTitle: '11'
            }
        });
    }
}