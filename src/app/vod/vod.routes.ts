import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { VODComponent } from './vod.component';
import { VodDetailComponent } from './vod-detail';
import { VODDetail } from './vod.resolver';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'vod',
            component: VODComponent
        }, {
            path: 'vod/:fromSource/:id',
            component: VodDetailComponent,
            resolve: {VODDetail}
        }
    ])],
    exports: [RouterModule],
})

export class VodRoutesModule {
}
