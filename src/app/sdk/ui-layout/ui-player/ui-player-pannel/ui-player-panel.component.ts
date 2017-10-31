import { Component, Input, OnInit } from '@angular/core';
import { UiPlayerService } from '../ui-player.service';

@Component({
    selector: 'ui-player-panel',
    templateUrl: './ui-player-panel.component.html',
    styleUrls: ['./ui-player-panel.component.scss']
})

export class UiPlayerPanelComponent implements OnInit {

    @Input()
    public panelDuration: string = '00:00:00';

    @Input()
    public percent: number = 0;

    @Input()
    public panelStarTime: string = '00:00:00';

    public volumeStr: string;

    constructor(private uiPlayerService: UiPlayerService) {
    }

    public ngOnInit(): void {
        this.volumeStr = 'volume_mute';
    }

    public toggleFullScreen(): void {
        if (this.uiPlayerService.isFullScreen()) {
            this.uiPlayerService.exitFullScreen();
        } else {
            this.uiPlayerService.enterFullScreen();
        }
    }

}