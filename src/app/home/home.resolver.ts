import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as _ from 'lodash';
import { Sliding, Carousel, Poster } from '../sdk';

@Injectable()
export class ComeSoonWithMtimeResolver implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.appService.IPTV.getComeSoonWithMtime(628)
            .map((comeNewMtime: any) => {
                let {attention, moviecomings} = comeNewMtime;
                let posterList: Poster[];
                let SlidingNew: Sliding;
                posterList = _.map(attention, (resp: any) => {
                    return {
                        id: resp.id,
                        url: resp.image,
                        defaultPictureName: 'movie',
                        title: resp.title,
                        subTitle: resp.type,
                        mask: {
                            title3: resp.releaseDate
                        }
                    };
                });
                SlidingNew = {
                    topHeader: {
                        title: '即将上映',
                        count: moviecomings.length
                    },
                    posterList
                };
                return SlidingNew;
            });
    }
}

@Injectable()
export class CarouselResolver implements Resolve<any> {
    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return Observable.forkJoin(this.appService.IPTV.getTrailers(), this.appService.IPTV.getArticles())
            .map((forkService: any) => {
                let traiCarsel: Carousel[];
                let artCarsel: Carousel[];
                let trailerList = forkService[0].itemList;
                let articleList = forkService[1].data;
                trailerList = _.filter(trailerList, (item: any) => item.type === 'video');
                traiCarsel = _.map(trailerList, (resp: any) => {
                    let {data} = resp;
                    return {
                        id: data.id,
                        url: data.cover.detail,
                        title: data.title,
                        subTitle: data.slogan,
                        buttonText: '观看影片',
                        longDescription: data.description,
                        sourceType: 'trailer'
                    };
                });
                artCarsel = _.map(articleList, (resp: any) => {
                    return {
                        id: +resp.id,
                        url: resp.img_url,
                        title: resp.subtitle,
                        subTitle: resp.title,
                        buttonText: '了解详情',
                        longDescription: resp.forward,
                        sourceType: 'article'
                    };
                });
                traiCarsel = traiCarsel.slice(0, 2);
                artCarsel = artCarsel.slice(0, 2);
                return [...traiCarsel, ...artCarsel];
            });
    }
}
