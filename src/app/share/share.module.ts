import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { ButtonComponent } from './buttons/button.component';
import { RippleDirective } from './ripple/ripple.directive';
import { PlaybillPosterComponent } from './playbill-poster';
import { SlideListModule } from './slide-list';

@NgModule({
    imports: [
        CommonModule,
        SlideListModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonComponent,
        SlideListModule
    ],
    declarations: [
        ButtonComponent,
    ]
})
export class ShareModule {
}
