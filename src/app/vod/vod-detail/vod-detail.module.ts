import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';
import { RatingComponent } from './rating';
import { ShortInfoComponent } from './short-info';

@NgModule({
    imports: [
        ShareModule
    ],
    declarations: [
        VodDetailComponent,
        RatingComponent,
        ShortInfoComponent
    ],
    providers: [],
})
export class VodDetailModule {
}
