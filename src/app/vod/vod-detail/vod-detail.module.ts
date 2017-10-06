import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';
import { RatingComponent } from './rating';
import { ShortInfoComponent } from './short-info';
import { MoreStillsComponent } from './show-more-stills';
import { MatButtonToggleModule } from '@angular/material';

@NgModule({
    imports: [
        ShareModule,
        MatButtonToggleModule
    ],
    declarations: [
        VodDetailComponent,
        RatingComponent,
        ShortInfoComponent,
        MoreStillsComponent
    ],
    providers: [],
})
export class VodDetailModule {
}
