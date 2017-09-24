import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

@NgModule({
    imports: [
        ShareModule,
        RouterModule,
    ],
    exports: [
        FooterComponent
    ],
    declarations: [
        FooterComponent
    ],
})
export class FooterModule {
}
