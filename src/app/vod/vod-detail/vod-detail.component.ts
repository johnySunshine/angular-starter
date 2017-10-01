import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';
import { MenuTypes } from '../../header';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from './model/detail';

@Component({
    selector: 'vod-detail-component',
    templateUrl: './vod-detail.component.html',
    styleUrls: ['./vod-detail.component.scss']
})

export class VodDetailComponent implements OnInit {

    public detailInfo: Detail;

    constructor(private appService: AppState,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public ngOnInit() {
        document.documentElement.scrollTop = 0;
        this.onLoadData();
    }

    public onLoadData(): void {
        this.route.data.subscribe((resp) => {
            let {VODDetail} = resp;
            this.detailInfo = VODDetail;
            this.appService.triggerMenusEvent({
                status: MenuTypes.detail,
                menuData: {
                    menuTitle: VODDetail.title
                }
            });
        });
    }
}