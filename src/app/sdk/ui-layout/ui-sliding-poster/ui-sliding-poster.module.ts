import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { UiSlidingPosterComponent } from './ui-sliding-poster.component';
import { UiSlidingPosterService } from './ui-sliding-poster.service';
import { UiSlidingHeaderComponent } from './ui-sliding-header/ui-sliding-header.component';
import { UiPosterModule } from '../ui-poster/ui-poster.module';
import { UiSlidingArrowsComponent } from './ui-sliding-arrrows/ui-sliding-arrows.component';

@NgModule({
    imports: [
        CommonModule,
        UiPosterModule,
        MdButtonModule
    ],
    exports: [UiSlidingPosterComponent],
    declarations: [
        UiSlidingPosterComponent,
        UiSlidingHeaderComponent,
        UiSlidingArrowsComponent
    ],
    providers: [UiSlidingPosterService],
})
export class UiSlidingPosterModule {
}
