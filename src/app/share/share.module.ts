import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { SlideListModule } from './slide-list';
import { MdButtonModule, MdIconModule, MdTooltipModule, MatDialogModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlimScrollModule } from 'ng2-slimscroll';
import { UnsliderComponent } from './unslider';
import { UiTextComponent, UiPosterComponent } from '../sdk';

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

const uiComponent = [
    UiTextComponent,
    UiPosterComponent,
];

/**
 * 共享模块，用于设置各组件中，重复调用的组件的模式
 */
@NgModule({
    imports: [
        CommonModule,
        SlideListModule,
        ...otherModule,
        ...mdModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        SlideListModule,
        UnsliderComponent,
        ...uiComponent,
        ...otherModule,
        ...mdModule
    ],
    declarations: [
        UnsliderComponent,
        ...uiComponent,
    ]
})
export class ShareModule {
}
