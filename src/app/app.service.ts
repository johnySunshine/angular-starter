import { Injectable } from '@angular/core';
import { SessionService } from './sdk/session.service';

export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {

    public get session() {
        return this.sessionService;
    }

    constructor(private sessionService: SessionService) {

    }
}
