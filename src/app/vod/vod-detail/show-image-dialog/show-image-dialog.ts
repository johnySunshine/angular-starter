import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { AppState } from '../../../app.service';
import { Poster } from '../../../sdk';

@Component({
    selector: 'show-more-dialog',
    templateUrl: 'show-image-dialog.html',
    styleUrls: ['show-image-dialog.scss']
})

export class ShowImageDialogComponent implements OnInit {
    public imageDetail: Poster;
    public chosenImageURL: string;
    public viewPosterWidth: number = 1284 - (15 * (7 - 1));

    constructor(@Inject(MD_DIALOG_DATA) public data: any,
                public appService: AppState) {
    }

    public ngOnInit(): void {
        let {posterId, stillPosterList} = this.data;
        let curImage: Poster = _.find(stillPosterList, (resp: any) => resp.id === posterId);
        this.imageDetail = {
            id: curImage.id,
            url: this.appService.setImageSize4MTime(curImage.url, '1000X1000'),
            defaultPictureName: 'image'
        };
    }
}
