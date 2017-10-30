import { Component, Input, OnInit } from '@angular/core';
import { UiPlayerService } from '../ui-player.service';

@Component({
    selector: 'ui-control-panel',
    templateUrl: 'ui-control-panel.component.html',
    styleUrls: ['./ui-control-panel.component.scss']
})

export class UiControlPanelComponent implements OnInit {

    public playerStartTime: string;

    public playerDurations: string;

    public buttonStatus: string;

    public playerPercens: number;

    constructor(public uiPlayerService: UiPlayerService) {
    }

    public ngOnInit(): void {
        this.buttonStatus = 'play_arrow';
        let video = this.uiPlayerService.video;

        video.ontimeupdate = () => {
            let curTimeStr = this.uiPlayerService.converseTime(this.uiPlayerService.getCurrentTime());
            this.playerStartTime = curTimeStr;
            this.playerPercens = this.uiPlayerService.getPercen4Player(this.uiPlayerService.getCurrentTime(), this.uiPlayerService.getDuration());
        };
        video.oncanplay = () => {
            let durations = this.uiPlayerService.converseTime(this.uiPlayerService.getDuration());
            this.playerStartTime = `00:00:00`;
            this.playerDurations = durations;
        };

        video.onended = () => {
            this.buttonStatus = 'replay';
        };
    }

    public playMedia(): void {
        if (this.uiPlayerService.isPaused()) {
            this.uiPlayerService.play();
            this.buttonStatus = 'pause';
        } else {
            this.uiPlayerService.pause();
            this.buttonStatus = 'play_arrow';
        }
    }
}
