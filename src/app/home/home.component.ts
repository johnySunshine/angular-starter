import {
    Component, HostBinding,
    OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { MenusStatus } from '../header/model/menusStatus';
import { MenuTypes } from '../header/model/menus.enum';
import { Slide, SlideHeader, SlideTypes } from '../share/slide-list/model/slide';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInDownAnimation } from '../sdk/animated/routeAnimation.animated';
import { Poster } from "../sdk/ui-layout/ui-poster/model/ui-poster";

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: 'home',  // <home></home>
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    /**
     * Our list of styles in our component. We may add more to compose many styles together.
     */
    styleUrls: ['./home.component.scss'],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    /**
     * Set our default values
     */
    public localState = {value: ''};
    /**
     * TypeScript public modifiers
     */

    public posterTypes = SlideTypes.vertical;
    public posterTypes1 = SlideTypes.horizontal;
    public posterTypes2 = SlideTypes.square;

    public slides: Slide = {};

    public uiPoster: Poster;

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
            let {comeSoon} = homeData;
            console.log(comeSoon);
            this.slides = comeSoon;
            this.uiPoster = {
                url: comeSoon.playbillPosters[0].posterUrl,
                id: comeSoon.playbillPosters[0].id,
                defaultPictureName: 'movie',
                title: 'lorem lorem以及中文测试以及中文测试 lorem lorem lorem lorem',
                subTitle: 'lorem lorem以及中文测试以及中文测试 lorem lorem lorem lorem',
                mask: {
                    title1: 'title1 title1 title1 title1 title1',
                    title2: 'title2',
                    title3: 'title3',
                    title4: 'title4',
                    isShowPercent: true,
                    spinnerPercent: `78%`
                }
            };
            // let initCount = 1;
            // setInterval(() => {
            //     this.uiPoster.mask.spinnerPercent = `${initCount}%`;
            //     initCount++;
            // }, 1000);
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
