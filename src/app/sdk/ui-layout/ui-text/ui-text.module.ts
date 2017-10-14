import { NgModule } from '@angular/core';
import { MdIconModule } from '@angular/material';
import { UiTextComponent } from './ui-text.component';

@NgModule({
    imports: [MdIconModule],
    exports: [UiTextComponent],
    declarations: [UiTextComponent],
})
export class UiTextModule {
}
