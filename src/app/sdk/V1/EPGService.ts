import { Injectable } from '@angular/core';
import { Http, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Options } from './options';
import { UrlDev, urlOptions } from './requestUrl';

@Injectable()
export class EPGService {
    public isDev: boolean = true;

    constructor(private http: Http) {
    }

    public sendRequest(requestName: string, options: Options) {
        let reqURL = this.isDev ? UrlDev[requestName] : urlOptions[requestName];
        if (options.Method === RequestMethod.Get) {
            let reqUrl = reqURL + `/${options.Data}`;
            if (!options.Data) {
                reqUrl = reqURL;
            }
            return this.http.get(reqUrl).map((resp) => resp.json());
        }
        if (options.Method === RequestMethod.Post) {
            return this.http.post(reqURL, options.Data).map((resp) => resp.json());
        }
    }

    public getMenus(): Observable<any> {
        const options: Options = {
            Method: RequestMethod.Get
        };
        return this.sendRequest('MenuList', options);

    }

}
