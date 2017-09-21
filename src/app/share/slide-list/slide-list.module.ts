import { NgModule } from '@angular/core';
import { SlideHeaderComponent } from './slide-header/slide-header.component';
import { SlideListComponent } from './slide-list.component';
import { SlideListService } from './slide-list.service';
import { CommonModule } from '@angular/common';
import { PlaybillPosterComponent } from '../playbill-poster';
import { SlideArrowsComponent } from './slide-arrows/slide-arrows.component';
import { RippleDirective } from '../ripple/ripple.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlideHeaderComponent,
        SlideListComponent,
        PlaybillPosterComponent,
        SlideArrowsComponent,
        RippleDirective,
    ],
    exports: [
        SlideListComponent,
        PlaybillPosterComponent,
        RippleDirective,
    ],
    providers: [
        SlideListService
    ]
})
export class SlideListModule {
}
