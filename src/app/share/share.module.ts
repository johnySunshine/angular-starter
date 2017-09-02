import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { ButtonComponent } from './buttons/button.component';

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
