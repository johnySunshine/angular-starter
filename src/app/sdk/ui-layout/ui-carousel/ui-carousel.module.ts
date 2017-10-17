import { NgModule } from '@angular/core';

import { UiCarouselComponent } from './ui-carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [UiCarouselComponent],
    declarations: [UiCarouselComponent]
})
export class UiCarouselModule {
}
