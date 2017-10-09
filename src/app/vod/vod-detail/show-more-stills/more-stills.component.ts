import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageType } from '../model/imageType';
import { Poster } from '../../../share/playbill-poster/model/poster';
import { AppState } from '../../../app.service';
import { MenuTypes } from '../../../header/model/menus.enum';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { ShowImageDialogComponent } from '../show-image-dialog/show-image-dialog';

@Component({
    selector: 'more-stills',
    templateUrl: 'more-stills.component.html',
    styleUrls: ['more-stills.component.scss']
})

export class MoreStillsComponent implements OnInit {
    public isVertical: boolean = false;

    public imageTypes: ImageType[];

    public imageTypeValue: number;

    public imagesSource: any[];

    public imagesTotal: number;

    public stillPosterList: Poster[];

    public config: MdDialogConfig = {
        disableClose: false,
        hasBackdrop: true,
    };

    constructor(private route: ActivatedRoute,
                private appService: AppState,
                public dialog: MdDialog) {
        document.documentElement.scrollTop = 0;
    }

    public ngOnInit(): void {
        this.imageTypeValue = -1;
        this.route.data.subscribe((data) => {
            let {VODStills: {imageTypes, images}} = data;
            this.stillPosterList = images;
            this.imagesSource = images;
            this.imageTypes = imageTypes;
            this.imagesTotal = images.length;
            this.appService.triggerMenusEvent({
                status: MenuTypes.search,
                menuData: {
                    menuTitle: 'HEADER.FILM_STILLS',
                    counts: images.length
                }
            });
        });
    }

    public chooseType($event) {
        let {value} = $event;
        this.stillPosterList = _.filter(this.imagesSource, (isource) => isource.type === value);
        if (value === -1) {
            this.stillPosterList = this.imagesSource;
        }
        this.imagesTotal = this.stillPosterList.length;
    }

    public showPicture($event) {
        let {posterId} = $event;
        this.config.data = {
            posterId,
            stillPosterList: this.stillPosterList
        };
        this.dialog.open(ShowImageDialogComponent, this.config);
    }
}
