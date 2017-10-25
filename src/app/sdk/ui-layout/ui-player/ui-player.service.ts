import { Injectable } from '@angular/core';
import * as _ from 'lodash';

const browersType: string[] = ['webkit', 'moz', 'ms', 'o', ''];

@Injectable()
export class UiPlayerService {

    public setVideoRef: any;

    constructor() {
    }

    public onBort(fn): void {
        this.setVideoRef.onbort = fn;
    }

    public onTimeUpdate(fn) {
        this.setVideoRef.ontimeupdate = fn;
    }

}