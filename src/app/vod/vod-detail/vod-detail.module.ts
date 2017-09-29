import { NgModule } from '@angular/core';

import { VodDetailComponent } from './vod-detail.component';
import { ShareModule } from '../../share';

@NgModule({
    imports: [
        ShareModule
    ],
    declarations: [VodDetailComponent],
    providers: [],
})
export class VodDetailModule {
}
