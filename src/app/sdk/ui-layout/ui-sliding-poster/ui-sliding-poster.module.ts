import { NgModule } from '@angular/core';

import { UiSlidingPosterComponent } from './ui-sliding-poster.component';
import { UiSlidingPosterService } from './ui-sliding-poster.service';

@NgModule({
    imports: [],
    exports: [UiSlidingPosterComponent],
    declarations: [UiSlidingPosterComponent],
    providers: [UiSlidingPosterService],
})
export class UiSlidingPosterModule {
}
