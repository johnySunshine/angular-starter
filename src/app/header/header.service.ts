import { Injectable } from '@angular/core';
import { AppState } from '../app.service';

@Injectable()
export class HeaderService {
    constructor(private appService: AppState) {
    }

    public getMenus() {
        return this.appService.IPTV.getMenus()
            .map((results) => results.result);
    }
}