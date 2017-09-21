import { Injectable } from '@angular/core';
import { Http, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Options } from './options';
import { UrlDev, urlOptions } from './requestUrl';
import { SpinnerService } from '../../spinner/spinner.service';

@Injectable()
export class EPGService {
    public isDev: boolean = true;

    constructor(private http: Http,
                private spinnerService: SpinnerService) {
    }

    public sendRequest(requestName: string, options: Options) {
        let reqURL = this.isDev ? UrlDev[requestName] : urlOptions[requestName];
        if (options.Method === RequestMethod.Get) {
            let reqUrl = reqURL;
            if (!this.isDev && options.Data) {
                reqUrl = reqURL + `/${options.Data}`;
            }
            this.spinnerService.showSpinner();
            return this.http.get(reqUrl).map((resp) => {
                this.spinnerService.hideSpinner();
                return resp.json();
            });
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

    public getComeSoon() {
        const options: Options = {
            Method: RequestMethod.Get
        };
        return this.sendRequest('ComeSoon', options);
    }

}
