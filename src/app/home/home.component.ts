import {
    Component, HostBinding,
    OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { MenusStatus } from '../header/model/menusStatus';
import { MenuTypes } from '../header/model/menus.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Sliding, SlidingTypes } from '../sdk';
import * as _ from 'lodash';
import { Poster, Carousel } from '../sdk';

@Component({
    selector: 'home',  // <home></home>
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public localState = {value: ''};
    public posterTypes = SlidingTypes.vertical;

    public uiPoster: Poster;

    public uiSliding: Sliding;
    public uiSliding1: Sliding;

    public isAdaptive = true;

    public carousels: Carousel[];

    constructor(public appState: AppState,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public ngOnInit() {
        document.documentElement.scrollTop = 0;
        let menusStatus: MenusStatus = {
            status: MenuTypes.normal,
            menuData: '1'
        };
        this.route.data.subscribe((homeData) => {
            let {comeSoon, comeSoon: {posterList}} = homeData;
            this.uiSliding = comeSoon;
            this.uiSliding1 = comeSoon;
            this.carousels = _.map(posterList, (item: any) => {
                return {
                    id: item.id,
                    url: item.url,
                    title: item.title,
                    subTitle: item.subTitle,
                    buttonText: 'buttonText',
                    longDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, esse et facilis 
                    'fuga fugiat inventore ipsa ipsam, iusto libero minus nam obcaecati quas reiciendis sit, sunt totam veniam! Laborum, omnis!`
                };
            });
        });

        this.appState.triggerMenusEvent(menusStatus);
        /**
         * this.title.getData().subscribe(data => this.data = data);
         */
    }

    public submitState(value: string) {
        this.localState.value = '';
    }

    public headerMore1(a) {
        console.log(a);
    }

    public posterMore(a) {
        this.router.navigate(['vod', 'vodHome', a], a);
        console.log(a);
    }

    public showPoster($event) {
        console.log($event);
    }
}
