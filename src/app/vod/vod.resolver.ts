import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Detail } from './vod-detail/model/detail';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Sliding, Poster } from '../sdk';

/**
 * 用于影片详情的数据封装
 */
@Injectable()
export class VODDetail implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let {fromSource, id} = route.params;
        let detailResolve: Observable<any>;
        if (fromSource === 'fromMtime') {
            detailResolve = this.getVODDetailById4MTime(id);
        }
        return detailResolve;
    }

    public getVODDetailById4MTime(subjectsId: string) {
        return this.appService.IPTV.getVodDetailWithMtime(Number.parseInt(subjectsId, 10), 628)
            .map((subject: any) => {
                let {data: {basic}} = subject;
                let {stageImg: {list, count}} = basic;
                let casts: Sliding = {
                    topHeader: {
                        title: '演职人员',
                        count: basic.actors.length
                    },
                    posterList: _.map(basic.actors, (item: any) => {
                        return {
                            id: item.actorId,
                            url: this.appService.setImageSize4MTime(item.img, '201X282'),
                            title: item.name,
                            subtitle: item.roleName,
                            defaultPictureName: 'person',
                            mask: {}
                        };
                    })
                };
                let stills: Sliding = {
                    topHeader: {
                        title: '影片图片',
                        count
                    },
                    posterList: _.map(list, (item: any) => {
                        return {
                            id: item.imgId,
                            url: this.appService.setImageSize4MTime(item.imgUrl, '170X170'),
                            defaultPictureName: 'image',
                            mask: {}
                        };
                    })
                };
                let detailOptions: Detail = {
                    poster: {
                        id: basic.movieId,
                        url: basic.img,
                        defaultPictureName: 'movie'
                    },
                    id: +basic.movieId,
                    title: basic.name,
                    subTitle: basic.releaseArea,
                    longDescription: basic.story,
                    ratings: basic.overallRating,
                    ratingCount: basic.personCount,
                    genres: basic.type.toString(),
                    durations: basic.mins,
                    year: moment(basic.releaseDate).format('YYYY'),
                    originalTitle: basic.nameEn,
                    languages: '英语',
                    land: basic.releaseArea,
                    stills,
                    casts,
                    bgPicture: list[0].imgUrl,
                    sourceData: 'mtime'
                };
                return detailOptions;
            });
    }
}

@Injectable()
export class VODStills implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let {id} = route.params;
        let detailResolve: Observable<any>;
        detailResolve = this.appService.IPTV.getVodDetailPhoteWithMtime(id)
            .map((data: any) => {
                let {imageTypes, images} = data;
                images = _.map(images, (item: any) => {
                    let stillPoster: Poster = {
                        id: item.id,
                        url: this.appService.setImageSize4MTime(item.image, '170X170'),
                        defaultPictureName: 'image',
                    };
                    return stillPoster;
                });
                return {
                    imageTypes,
                    images
                };
            });
        return detailResolve;
    }
}
