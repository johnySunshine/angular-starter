import {
    Component, HostBinding,
    OnInit
} from '@angular/core';
import { AppState } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel, Sliding } from '../sdk';
import { MenuTypes } from '../header';
import { HomeService } from './home.service';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public carousels: Carousel[];

    public comeSoonWithMTime: Sliding;

    constructor(private appService: AppState,
                private route: ActivatedRoute,
                private router: Router,
                private homeService: HomeService) {
        document.documentElement.scrollTop = 0;
        this.appService.triggerMenusEvent({
            status: MenuTypes.normal
        });
    }

    public ngOnInit(): void {
        this.route.data.subscribe((resp) => {
            let {carousels, comeSoonWithMtime} = resp;
            this.carousels = carousels;
            this.comeSoonWithMTime = comeSoonWithMtime;
        });
    }

    public fromCarousel(posterId: number) {
        console.log(posterId);
    }

    public topHeader(posterId: number) {
        this.router.navigate(['home', 'fromMtime', 'homeMore']);
    }

    public posterShowMore(posterId: number) {
        this.homeService.gotoVodDetail(posterId);
    }

}
