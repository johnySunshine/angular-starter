import { Injectable } from '@angular/core';
import { SessionService } from './coreSDK/session.service';

export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {

    public get session() {
        return this.sessionManager;
    }

    constructor(private sessionManager: SessionService) {

    }
}
