import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class HomeService {

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public gotoVodDetail(posterId: number) {
        this.router.navigate(['vod', 'fromMtime', posterId]);
    }
}