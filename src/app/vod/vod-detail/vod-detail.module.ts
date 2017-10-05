import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';
import { RatingComponent } from './rating';
import { ShortInfoComponent } from './short-info';
import { MoreStillsComponent } from './show-more-stills';

@NgModule({
    imports: [
        ShareModule
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
