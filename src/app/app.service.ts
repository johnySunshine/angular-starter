import { Injectable } from '@angular/core';
import { SessionService, Platform, EPGService } from './sdk';

@Injectable()
export class AppState {

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

    public get iptv() {
        return this.epgService;
    }
}
