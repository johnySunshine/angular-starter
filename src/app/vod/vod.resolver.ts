import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../app.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VODDetail implements Resolve<any> {

    constructor(private appService: AppState) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let {fromSource, id} = route.params;
        let detailResolve: Observable<any>;
        if (fromSource === 'vodHome') {
            detailResolve = this.appService.IPTV.getVODDetailById(Number.parseInt(id, 10));
        }
        return detailResolve;
    }
}
