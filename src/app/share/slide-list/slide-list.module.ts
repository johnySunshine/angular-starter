import { NgModule } from '@angular/core';
import { SlideHeaderComponent } from './slide-header/slide-header.component';
import { SlideListComponent } from './slideList.component';
import { SlideListService } from './slide-list.service';

@NgModule({
    exports: [SlideListComponent],
    declarations: [SlideHeaderComponent, SlideListComponent],
    providers: [SlideListService],
})
export class SlideListModule {
}
