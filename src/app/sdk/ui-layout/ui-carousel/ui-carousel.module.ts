import { NgModule } from '@angular/core';

import { UiCarouselComponent } from './ui-carousel.component';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MdButtonModule],
    exports: [UiCarouselComponent],
    declarations: [UiCarouselComponent]
})
export class UiCarouselModule {
}
