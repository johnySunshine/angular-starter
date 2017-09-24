import { NgModule } from '@angular/core';
import { SlideHeaderComponent } from './slide-header/slide-header.component';
import { SlideListComponent } from './slide-list.component';
import { SlideListService } from './slide-list.service';
import { CommonModule } from '@angular/common';
import { PlaybillPosterComponent } from '../playbill-poster';
import { SlideArrowsComponent } from './slide-arrows/slide-arrows.component';
import { MdButtonModule, MdRippleModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdRippleModule
    ],
    declarations: [
        SlideHeaderComponent,
        SlideListComponent,
        PlaybillPosterComponent,
        SlideArrowsComponent,
    ],
    exports: [
        SlideListComponent,
        PlaybillPosterComponent,
        MdRippleModule
    ],
    providers: [
        SlideListService
    ]
})
export class SlideListModule {
}
