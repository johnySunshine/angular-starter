import {
    Component, HostBinding,
    OnInit
} from '@angular/core';
import { AppState } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel, Sliding } from '../sdk';

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
                private router: Router) {
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
        console.log(posterId);
    }

    public posterShowMore(posterId: number) {
        console.log(posterId);
    }

}
