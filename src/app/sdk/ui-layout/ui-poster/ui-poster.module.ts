import { NgModule } from '@angular/core';

import { UiPosterComponent } from './ui-poster.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [UiPosterComponent],
    declarations: [UiPosterComponent]
})
export class UiPosterModule {
}
