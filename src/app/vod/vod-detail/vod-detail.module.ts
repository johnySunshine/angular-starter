import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';
import { RatingComponent } from './rating';

@NgModule({
    imports: [
        ShareModule
    ],
    declarations: [
        VodDetailComponent,
        RatingComponent
    ],
    providers: [],
})
export class VodDetailModule {
}
