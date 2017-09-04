import { Injectable } from '@angular/core';
import { SessionService, Platform, EPGService } from './sdk';
import { Subject } from 'rxjs/Subject';
import { MenusStatus } from './header/model/menusStatus';

@Injectable()
export class AppState {
    public triggerSubject = new Subject<any>();
    public onChangeMenus = this.triggerSubject.asObservable();

    constructor(private sessionService: SessionService,
                private platformService: Platform,
                private epgService: EPGService) {

    }

    public get session() {
        return this.sessionService;
    }

    public get platform() {
        return this.platformService;
    }

    public get IPTV() {
        return this.epgService;
    }

    /**
     * 触发事件
     * @param {MenusStatus} astronaut
     */
    public triggerEvent(astronaut: any) {
        this.triggerSubject.next(astronaut);
    }

    /**
     * 监听事件
     * @returns {Observable<any>}
     */
    public onEvent() {
        return this.onChangeMenus;
    }
}
