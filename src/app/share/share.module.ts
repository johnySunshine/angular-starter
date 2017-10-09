import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { SlideListModule } from './slide-list';
import { MdButtonModule, MdIconModule, MdTooltipModule, MatDialogModule, } from '@angular/material';
import { MoreTextComponent } from './more-text';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlimScrollModule } from 'ng2-slimscroll';

@NgModule({
    imports: [
        CommonModule,
        SlideListModule,
        MdButtonModule,
        MdIconModule,
        MdTooltipModule,
        InfiniteScrollModule,
        MatDialogModule,
        SlimScrollModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        SlideListModule,
        MdButtonModule,
        MoreTextComponent,
        MdIconModule,
        MdTooltipModule,
        InfiniteScrollModule,
        MatDialogModule,
        SlimScrollModule
    ],
    declarations: [
        MoreTextComponent
    ],
})
export class ShareModule {
}
