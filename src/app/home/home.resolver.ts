import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Sliding } from '../sdk';

@Injectable()
export class ComeSoonResolver implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.appService.IPTV.getComeSoon()
            .map((cs) => cs.subjects)
            .map((sj: any[]) => {
                let comeSoon: Sliding = {};
                comeSoon.posterList = _.map(sj, (resp) => {
                    return {
                        id: resp.id,
                        title: resp.title,
                        subTitle: resp.original_title,
                        defaultPictureName: 'movie',
                        url: resp.images.large,
                        mask: {
                            title4: resp.rating.average
                        }
                    };
                });
                comeSoon.topHeader = {
                    title: '最近上映'
                };
                return comeSoon;
            });
    }
}