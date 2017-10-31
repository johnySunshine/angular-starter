import { Component, Input, OnInit } from '@angular/core';
import { UiPlayerService } from '../ui-player.service';
import { UiVideoEvent } from '../model/ui-video-event';

@Component({
    selector: 'ui-control-panel',
    templateUrl: 'ui-control-panel.component.html',
    styleUrls: ['./ui-control-panel.component.scss']
})

export class UiControlPanelComponent extends UiVideoEvent implements OnInit {

    public playerStartTime: string;

    public playerDurations: string;

    public buttonStatus: string;

    public playerPercens: number;

    constructor(public uiPlayerService: UiPlayerService) {
        super(uiPlayerService);
    }

    public ngOnInit(): void {
        this.buttonStatus = 'play_arrow';
        super.ngOnInit();
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

    public onCanPlay(): void {
        let durations = this.uiPlayerService.converseTime(this.uiPlayerService.getDuration());
        this.playerStartTime = `00:00:00`;
        this.playerDurations = durations;
    }

    public onTimeUpdate(): void {
        let curTimeStr = this.uiPlayerService.converseTime(this.uiPlayerService.getCurrentTime());
        this.playerStartTime = curTimeStr;
        this.playerPercens = this.uiPlayerService.getPercent4Player();
    }

    public onEnded(): void {
        this.buttonStatus = 'replay';
    }
}
