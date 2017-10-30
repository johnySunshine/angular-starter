import { Component, Input, OnInit } from '@angular/core';
import { UiPlayerService } from "../ui-player.service";

@Component({
    selector: 'ui-player-panel',
    templateUrl: './ui-player-panel.component.html',
    styleUrls: ['./ui-player-panel.component.scss']
})

export class UiPlayerPanelComponent implements OnInit {

    @Input()
    public duration: number;

    @Input()
    public percent: number;

    @Input()
    public currentTime: number;

    @Input()
    public endTime: number;

    public curTimeStr: string;
    public endTimeStr: string;

    public volumeStr: string;

    constructor(private uiPlayerService: UiPlayerService) {
    }

    public ngOnInit(): void {
        this.curTimeStr = '00:00:00';
        this.endTimeStr = '00:00:00';
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