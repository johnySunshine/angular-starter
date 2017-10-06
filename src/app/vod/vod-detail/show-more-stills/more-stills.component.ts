import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageType } from '../model/imageType';

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

    public initImageShow: any[] = [];

    public imagesTotal: number;

    constructor(private route: ActivatedRoute) {
        document.documentElement.scrollTop = 0;
    }

    public ngOnInit(): void {
        this.imageTypeValue = -1;
        this.route.data.subscribe((data) => {
            let {VODStills: {imageTypes, images}} = data;
            this.imagesSource = images;
            this.imageTypes = imageTypes;
            this.imagesTotal = images.length;
            this.initImageShow = images.slice(0, 10);
        });
    }

    public chooseType(chooseType) {
        console.log(chooseType);
    }

    public onScroll() {
        if (this.initImageShow.length < this.imagesTotal) {

        }
    }
}