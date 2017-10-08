import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { SlideListModule } from './slide-list';
import { MdButtonModule, MdIconModule, MdTooltipModule } from '@angular/material';
import { MoreTextComponent } from './more-text';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        SlideListModule,
        MdButtonModule,
        MdIconModule,
        MdTooltipModule,
        InfiniteScrollModule
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
        InfiniteScrollModule
    ],
    declarations: [
        MoreTextComponent
    ],
})
export class ShareModule {
}
