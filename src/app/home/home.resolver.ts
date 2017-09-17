import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';
import { Slide } from '../share/slide-list/model/slide';
import * as _ from 'lodash';

@Injectable()
export class ComeSoonResolver implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.appService.IPTV.getComeSoon()
            .map((cs) => cs.subjects)
            .map((sj: any[]) => {
                let comeSoon: Slide = {};
                comeSoon.playbillPosters = _.map(sj, (resp) => {
                    return {
                        id: resp.id,
                        posterTitle: resp.title,
                        posterSubtitle: resp.original_title,
                        posterUrl: resp.images.large,
                        posterMask: {
                            rating: resp.rating.average
                        }
                    };
                });
                comeSoon.slideHeader = {
                    title: '最近上印'
                };
                return comeSoon;
            });
    }
}