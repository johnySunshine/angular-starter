import { Injectable } from '@angular/core';
import { SessionService, Platform } from './sdk';

export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {

    public get session() {
        return this.sessionService;
    }

    public get platform() {
        return this.platformService;
    }

    constructor(private sessionService: SessionService,
                private platformService: Platform) {

    }
}
