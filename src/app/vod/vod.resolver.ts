import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import { Detail } from './vod-detail/model/detail';
import * as _ from 'lodash';
import { Slide } from "../share/slide-list/model/slide";

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
        if (fromSource === 'vodHome') {
            detailResolve = this.appService.IPTV.getVODDetailById(Number.parseInt(id, 10)).map((subjects) => {

                let {photos, casts, directors} = subjects;
                let stills: Slide = {
                    slideHeader: {
                        title: '影片剧照'
                    },
                    playbillPosters: _.map(photos, (pic: any) => {
                        return {
                            id: pic.id,
                            posterUrl: pic.cover
                        };
                    })
                };
                let director = _.map(directors, (direc: any) => {
                    return {
                        id: direc.id,
                        posterUrl: direc.avatars.large,
                        posterTitle: direc.name,
                        posterSubtitle: '导演'
                    };
                });
                let cast = _.map(casts, (item: any) => {
                    return {
                        id: item.id,
                        posterUrl: item.avatars.large,
                        posterTitle: item.name,
                        posterSubtitle: item.name_en
                    };
                });
                let persons: Slide = {
                    slideHeader: {
                        title: '演职人员'
                    },
                    playbillPosters: [...director, ...cast]
                };
                let detailOptions: Detail = {
                    poster: {
                        id: subjects.id,
                        posterUrl: subjects.images.large,
                        width: '310px',
                        height: '445px'
                    },
                    title: subjects.title,
                    subTitle: subjects.countries.toString(),
                    longDescription: subjects.summary,
                    ratings: subjects.rating.average,
                    ratingCount: subjects.ratings_count,
                    genres: subjects.genres.toString(),
                    durations: subjects.durations.toString(),
                    year: subjects.year,
                    originalTitle: subjects.original_title,
                    languages: subjects.languages.toString(),
                    land: subjects.countries.toString(),
                    stills,
                    persons
                };
                return detailOptions;
            });
        }
        return detailResolve;
    }
}
