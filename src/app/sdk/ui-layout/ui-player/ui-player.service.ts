import { Injectable } from '@angular/core';
import * as _ from 'lodash';

const browersType: string[] = ['webkit', 'moz', 'ms', 'o', ''];
const enterFullDomList: string[] = ['msRequestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'requestFullscreen'];
const exitFullDomList: string[] = ['exitFullscreen', 'msExitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen'];

@Injectable()
export class UiPlayerService {

    public video: any;
    public setHostRef: any;

    constructor() {
    }

    public initMediaPlayer(video: any, url: string, width: number, height: number): void {
        video.setAttribute('src', url);
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        this.video = video;
    }

    /**
     * 判断浏览器当前是否处于全屏状态
     * @returns {boolean}
     */
    public isFullScreen(): boolean {
        return this.invokeFullScreenMethod(document, 'FullScreen') ||
            this.invokeFullScreenMethod(document, 'IsFullScreen');
    }

    public getDuration(): number {
        return this.video.duration;
    }

    public getCurrentTime(): number {
        return this.video.currentTime;
    }

    public play(): void {
        this.video.play();
    }

    public pause(): void {
        this.video.pause();
    }

    public load(): void {
        this.video.load();
    }

    public isPaused(): boolean {
        return this.video.paused;
    }

    public isMuted(): boolean {
        return this.video.muted;
    }

    public setMuted(): void {
        this.video.muted;
    }

    public getVolume(): number {
        return this.video.volume;
    }

    public enterFullScreen(): void {
        _.each(enterFullDomList, (docu: string) => {
            if (this.setHostRef[docu]) {
                this.setHostRef[docu]();
            }
        });
    }

    public exitFullScreen(): void {
        _.each(exitFullDomList, (docu: string) => {
            if (document[docu]) {
                document[docu]();
            }
        });
    }

    public invokeFullScreenMethod(element, method: string): boolean {
        let usablePrefixMethod: boolean = false;
        _.each(browersType, (prefix: string) => {
            if (usablePrefixMethod) {
                return;
            }
            if (_.isEmpty(prefix)) {
                method = method.slice(0, 1).toLowerCase() + method.slice(1);
            }
            let typePrefixMethod: string = typeof element[prefix + method];
            if (typePrefixMethod + '' !== 'undefined') {
                if (typePrefixMethod === 'function') {
                    usablePrefixMethod = element[prefix + method]();
                } else {
                    usablePrefixMethod = element[prefix + method];
                }
            }
        });
        return usablePrefixMethod;
    }

    public getNumberBit(seconds: number): number {
        return seconds.toString().length;
    }

    public getNumberBitStr(timeNumber: number): string {
        timeNumber = Math.floor(timeNumber);
        return this.getNumberBit(timeNumber) === 1 ? `0${timeNumber}` : `${timeNumber}`;
    }

    public lessThanMinute(timeNumber: number): string {
        return `00:00:${this.getNumberBitStr(timeNumber)}`;
    }

    public moreThanMinute(timeNumber: number): string {
        let remainderTime4Sec = Math.floor(timeNumber % 60);
        let minute = Math.floor(timeNumber / 60);
        let secStr = this.getNumberBitStr(remainderTime4Sec);
        let minuteStr = this.getNumberBitStr(minute);
        return `00:${minuteStr}:${secStr}`;
    }

    public moreThanHour(timeNumber: number): string {
        let hour = Math.floor(timeNumber / 3600);
        let minutes = Math.floor(((timeNumber - hour * 60) / 60));
        let seconds = Math.floor(((timeNumber - hour * 60) % 60));
        return `${this.getNumberBitStr(hour)}:${this.getNumberBitStr(minutes)}:${this.getNumberBitStr(seconds)}`;
    }

    public converseTime(seconds: number): string {
        if (seconds < 60) {
            return this.lessThanMinute(seconds);
        } else if (seconds > 60 && seconds < 3600) {
            return this.moreThanMinute(seconds);
        } else {
            return this.moreThanHour(seconds);
        }
    }

    public getPercent4Player(): number {
        return (this.getCurrentTime() / this.getDuration()) * 100;
    }
}
