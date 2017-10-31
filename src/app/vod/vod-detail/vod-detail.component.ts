import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';
import { MenuTypes } from '../../header';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Detail } from './model/detail';
import { ShortInfo } from './model/shortInfo';
import 'rxjs/add/operator/switchMap';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { ShowImageDialogComponent } from './show-image-dialog/show-image-dialog';
import { Sliding } from '../../sdk';
import { SlidingTypes } from '../../sdk';

@Component({
    selector: 'vod-detail-component',
    templateUrl: './vod-detail.component.html',
    styleUrls: ['./vod-detail.component.scss']
})

export class VodDetailComponent implements OnInit {

    public detailInfo: Detail;

    public stillsPhoto: Sliding;

    public shortInfo: ShortInfo[];

    public types = SlidingTypes.square;

    public personTypes = SlidingTypes.vertical;

    public isFromMtime: boolean;

    public vodSource: string;

    constructor(private appService: AppState,
                private route: ActivatedRoute,
                private router: Router,
                public dialog: MdDialog) {
    }

    public ngOnInit() {
        document.documentElement.scrollTop = 0;
        this.isFromMtime = false;
        this.onLoadData();

    }

    public onLoadData(): void {
        this.route.data.subscribe((resp) => {
            let {VODDetail} = resp;
            this.stillsPhoto = VODDetail.stills;
            this.detailInfo = VODDetail;
            this.isFromMtime = VODDetail.sourceData === 'mtime';
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
        this.route.params.subscribe((params: Params) => {
            let {fromSource} = params;
            this.vodSource = fromSource;
        });
    }

    public showAllStills(): void {
        this.router.navigate(['vod', this.vodSource, this.detailInfo.id.toString(), 'stills']);
    }

    public showImage(posterId): void {
        let config: MdDialogConfig = {
            data: {
                posterId,
                stillPosterList: this.stillsPhoto.posterList
            }
        };
        this.dialog.open(ShowImageDialogComponent, config);
    }
}
