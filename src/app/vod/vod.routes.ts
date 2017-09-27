import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { VODComponent } from './vod.component';
import { VodDetailComponent } from './vod-detail';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'vod',
            component: VODComponent
        }, {
            path: 'vod/:id',
            component: VodDetailComponent
        }
    ])],
    exports: [RouterModule],
})

export class VodRoutesModule {
}
