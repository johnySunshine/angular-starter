import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
        this.spinnerService.showSpinner();
        return this.http.get(serURL).map((resp) => {
            this.spinnerService.hideSpinner();
            return resp.json();
        });
    }

    public sendRequest4Post(requestUrl: string, options: any): Observable<Response> {
        this.spinnerService.showSpinner();
        return this.http.post(requestUrl, options).map((resp) => {
            this.spinnerService.hideSpinner();
            return resp.json();
        });
    }

    /**
     * 菜单的请求
     * @returns {Observable<any>}
     */
    public getMenus(): Observable<any> {
        return this.sendRequest4Get('/Menus/list');
    }

    public getTrailers(): Observable<any> {
        return this.sendRequest4Get('/FilmNews/Trailers');
    }

    public getArticles(): Observable<any> {
        return this.sendRequest4Get('/FilmNews/MovieListWithOne');
    }

    public getComeSoonWithMtime(locationId: number): Observable<any> {
        return this.sendRequest4Get('/MTimes/ComingNew', `/${locationId}`);
    }

    public getVodDetailWithMtime(vodId: number, locationId: number) {
        return this.sendRequest4Get('/MTimes/Movie', `/${vodId}`, `/${locationId}`);
    }

    public getVodDetailCastWithMtime(vodId: number) {
        return this.sendRequest4Get('/MTimes/Cast', `/${vodId}`);
    }

    public getVodDetailPhoteWithMtime(vodId) {
        return this.sendRequest4Get('/MTimes/Movie/Images', `/${vodId}`);
    }

}
