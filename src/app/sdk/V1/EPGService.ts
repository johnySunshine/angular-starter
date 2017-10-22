import { Injectable } from '@angular/core';
import { Http, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Options } from './options';
import { UrlDev, urlOptions } from './requestUrl';
import { SpinnerService } from '../../spinner/spinner.service';
import { HttpServiceTool } from './httpServiceTool';

@Injectable()
export class EPGService extends HttpServiceTool {
    public isDev: boolean = ENV === 'development';

    constructor(private http: Http,
                private spinnerService: SpinnerService) {
        super();
    }

    public sendRequest4Get(requestUrl: string, ...options): Observable<Response> {
        let serURL = this.urlJionOptionsForGET(requestUrl, options);
        return this.http.get(serURL).map((resp) => resp.json());
    }

    public sendRequest4Post(requestUrl: string, options: any): Observable<Response> {
        return this.http.post(requestUrl, options).map((resp) => resp.json());
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

    /**
     * 菜单的请求
     * @returns {Observable<any>}
     */
    public getMenus(): Observable<any> {
        return this.sendRequest4Get('/V1/Menus/list');
    }

    public getCarousel(): Observable<any> {
        return this.sendRequest4Get('/V1/Menus/list');
    }

    public getComeSoon() {
        const options: Options = {
            Method: RequestMethod.Get
        };
        return this.sendRequest('ComeSoon', options);
    }

    public getVODDetailById(subjectId: number) {
        const options: Options = {
            Method: RequestMethod.Get,
            Data: subjectId
        };
        return this.sendRequest('VODDetail', options);
    }

    public getVODPhotosById(subjectId: number) {
        const options: Options = {
            Method: RequestMethod.Get,
            Data: subjectId
        };
        return this.sendRequest('VodPhotos', options);
    }

}
