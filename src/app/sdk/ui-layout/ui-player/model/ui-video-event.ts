import { UiVideo } from './ui-video';
import { OnInit } from '@angular/core';

export class UiVideoEvent implements UiVideo, OnInit {

    public videoRef: Element;

    constructor(public uiPlayerService: any) {

    }

    public ngOnInit(): void {
        this.videoRef = this.uiPlayerService.video;
        this.videoRef.addEventListener('timeupdate', this.onTimeUpdate.bind(this), false);
        this.videoRef.addEventListener('canplay', this.onCanPlay.bind(this), false);
        this.videoRef.addEventListener('ended', this.onEnded.bind(this), false);
    }

    public onCanPlay(): void {
    }

    public onTimeUpdate(): void {
    }

    public onEnded(): void {
    }

}
