import { NgModule } from '@angular/core';
import { ButtonComponent } from '../sdk/buttons/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonComponent
    ],
    declarations: [
        ButtonComponent
    ]
})
export class ShareModule {
}
