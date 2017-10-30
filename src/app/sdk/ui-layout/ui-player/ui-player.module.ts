import { NgModule } from '@angular/core';
import { MdSliderModule, MdButtonModule, MdIconModule } from '@angular/material';
import { UiPlayerComponent } from './ui-player.component';
import { UiPlayerService } from './ui-player.service';
import { UiControlPanelComponent } from './ui-player-control-panel/ui-control-panel.component';
import { UiPlayerPanelComponent } from './ui-player-pannel/ui-player-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSliderModule,
        MdButtonModule,
        MdIconModule,
    ],
    exports: [UiPlayerComponent],
    declarations: [
        UiPlayerComponent,
        UiControlPanelComponent,
        UiPlayerPanelComponent
    ],
    providers: [
        UiPlayerService
    ],
})
export class UiPlayerModule {
}
