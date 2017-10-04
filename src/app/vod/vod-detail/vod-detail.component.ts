import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';
import { MenuTypes } from '../../header';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from './model/detail';
import { ShortInfo } from './model/shortInfo';
import { SlideTypes } from '../../share/slide-list/model/slide';

@Component({
    selector: 'vod-detail-component',
    templateUrl: './vod-detail.component.html',
    styleUrls: ['./vod-detail.component.scss']
})

export class VodDetailComponent implements OnInit {

    public detailInfo: Detail;

    public shortInfo: ShortInfo[];

    public types = SlideTypes.square;

    public personTypes = SlideTypes.vertical;

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
            this.shortInfo = [{
                infoTitle: 'VOD-DETAIL.GENRES',
                infoValue: VODDetail.genres
            }, {
                infoTitle: 'VOD-DETAIL.DURATIONS',
                infoValue: VODDetail.durations
            }, {
                infoTitle: 'VOD-DETAIL.ORIGINAL_TITLE',
                infoValue: VODDetail.originalTitle
            }, {
                infoTitle: 'VOD-DETAIL.LANGUAGES',
                infoValue: VODDetail.languages
            }, {
                infoTitle: 'VOD-DETAIL.LAND',
                infoValue: VODDetail.land
            }
            ];
            this.appService.triggerMenusEvent({
                status: MenuTypes.detail,
                menuData: {
                    menuTitle: VODDetail.title
                }
            });
        });
    }
}