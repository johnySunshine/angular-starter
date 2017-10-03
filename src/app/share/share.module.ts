import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { SlideListModule } from './slide-list';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { MoreTextComponent } from './more-text';

@NgModule({
    imports: [
        CommonModule,
        SlideListModule,
        MdButtonModule,
        MdIconModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        SlideListModule,
        MdButtonModule,
        MoreTextComponent,
        MdIconModule
    ],
    declarations: [
        MoreTextComponent
    ]
})
export class ShareModule {
}
