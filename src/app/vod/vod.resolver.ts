import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import { Detail } from './vod-detail/model/detail';

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
                    ratingCount: subjects.ratings_count
                };
                return detailOptions;
            });
        }
        return detailResolve;
    }
}
