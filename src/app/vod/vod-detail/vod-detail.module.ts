import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';
import { RatingComponent } from './rating';
import { ShortInfoComponent } from './short-info';
import { MoreStillsComponent } from './show-more-stills';
import { MatButtonToggleModule } from '@angular/material';
import { ShowImageDialogComponent } from './show-image-dialog/show-image-dialog';

@NgModule({
    imports: [
        ShareModule,
        MatButtonToggleModule
    ],
    declarations: [
        VodDetailComponent,
        RatingComponent,
        ShortInfoComponent,
        MoreStillsComponent,
        ShowImageDialogComponent
    ],
    providers: [],
    entryComponents: [
        ShowImageDialogComponent
    ]
})
export class VodDetailModule {
}
