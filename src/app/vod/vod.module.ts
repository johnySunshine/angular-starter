import { NgModule } from '@angular/core';
import { VodRoutesModule } from './vod.routes';
import { VODComponent } from './vod.component';
import { VodDetailModule } from './vod-detail';
import { VODDetail, VODStills } from './vod.resolver';

@NgModule({
    imports: [
        VodDetailModule,
        VodRoutesModule,
    ],
    declarations: [
        VODComponent,
    ],
    providers: [VODDetail, VODStills],
})
export class VodModule {
}
