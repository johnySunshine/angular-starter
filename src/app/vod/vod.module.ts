import { NgModule } from '@angular/core';
import { VodRoutesModule } from './vod.routes';
import { VODComponent } from './vod.component';
import { VodDetailModule } from './vod-detail';

@NgModule({
    imports: [
        VodDetailModule,
        VodRoutesModule,
    ],
    declarations: [VODComponent],
    providers: [],
})
export class VodModule {
}
