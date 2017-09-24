import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { SlideListModule } from './slide-list';
import { MdButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SlideListModule,
        MdButtonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        SlideListModule,
        MdButtonModule
    ],
    declarations: []
})
export class ShareModule {
}
