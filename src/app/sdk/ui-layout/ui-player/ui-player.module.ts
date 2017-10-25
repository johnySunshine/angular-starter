import { NgModule } from '@angular/core';

import { UiPlayerComponent } from './ui-player.component';
import { UiPlayerService } from './ui-player.service';
import { UiControlPanelComponent } from './ui-player-control-panel/ui-control-panel.component';

@NgModule({
    imports: [],
    exports: [UiPlayerComponent],
    declarations: [UiPlayerComponent, UiControlPanelComponent],
    providers: [UiPlayerService],
})
export class UiPlayerModule {
}
