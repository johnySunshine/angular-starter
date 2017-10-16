import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { MdButtonModule, MdIconModule, MdTooltipModule, MatDialogModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlimScrollModule } from 'ng2-slimscroll';
import { UiPosterModule, UiTextModule, UiSlidingPosterModule } from '../sdk';
import { PlaybillPosterComponent } from "./playbill-poster/playbill-poster.component";

// material design 第三插件的模块
const mdModule = [
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    MatDialogModule
];
// 第三方模块
const otherModule = [
    InfiniteScrollModule,
    SlimScrollModule
];

const uiModule = [
    UiPosterModule,
    UiTextModule,
    UiSlidingPosterModule
];

/**
 * 共享模块，用于设置各组件中，重复调用的组件的模式
 */
@NgModule({
    imports: [
        CommonModule,
        ...otherModule,
        ...mdModule,
        ...uiModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ...otherModule,
        ...mdModule,
        ...uiModule,
        PlaybillPosterComponent
    ],
    declarations: [
        PlaybillPosterComponent
    ]
})
export class ShareModule {
}
