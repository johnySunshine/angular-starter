import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import * as _ from 'lodash';

@Injectable()
export class SessionService {

    private json: Object;
    private tobeLocalSavedJson: Object;
    private tobeSessionSavedJson: Object;

    public get(key: string): any {
        console.debug('begin get(),key is %s', key);
        if (!_.has(this.json, key)) {
            try {
                let valueStr = sessionStorage.getItem(key) || localStorage.getItem(key);
                if (valueStr) {
                    this.json[key] = JSON.parse(crypto.AES.decrypt(valueStr, key)
                        .toString(crypto.enc.Utf8));
                }
            } catch (e) {
                console.error(`localStorage access denied!`);
                return null;
            }
            return this.json[key];
        }
    }

    public put(key: string, value: any, isPersistence?: boolean): void {
        isPersistence = isPersistence || false;
        if (_.isNull(value) || _.isUndefined(value) || _.isNaN(value)) {

        }
        this.json[key] = value;
        if (isPersistence) {
            this.tobeLocalSavedJson[key] = value;
        } else {
            this.tobeSessionSavedJson[key] = value;
        }
        try {
            this._delaySave();
        } catch (e) {
            console.error(`localStorage access denied!`);
        }
    }

    private _delaySave() {

    }

}