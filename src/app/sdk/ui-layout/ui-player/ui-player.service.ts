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

    public onBort(fn): void {
        this.video.onbort = fn;
    }

    public onTimeUpdate(fn) {
        this.video.ontimeupdate = fn;
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

    /**
     * 判断浏览器当前是否处于全屏状态
     * @returns {boolean}
     */
    public isFullScreen(): boolean {
        return this.invokeFullScreenMethod(document, 'FullScreen') ||
            this.invokeFullScreenMethod(document, 'IsFullScreen');
    }

}