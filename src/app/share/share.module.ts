import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { ButtonComponent } from './buttons/button.component';
import { RippleDirective } from './ripple/ripple.directive';
import { PlaybillPosterComponent } from './playbill-poster';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonComponent,
        RippleDirective,
        PlaybillPosterComponent
    ],
    declarations: [
        ButtonComponent,
        RippleDirective,
        PlaybillPosterComponent
    ]
})
export class ShareModule {
}
