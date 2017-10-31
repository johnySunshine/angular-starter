import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { VODComponent } from './vod.component';
import { VodDetailComponent } from './vod-detail';
import { VODDetail, VODStills } from './vod.resolver';
import { MoreStillsComponent } from './vod-detail/show-more-stills';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'vod',
            component: VODComponent
        },
        {
            path: 'vod/:fromSource/:id',
            component: VodDetailComponent,
            resolve: {VODDetail}
        },
        {
            path: 'vod/:fromSource/:id/stills',
            component: MoreStillsComponent,
            resolve: {VODStills}
        }
    ])],
    exports: [RouterModule],
})

export class VodRoutesModule {
}
