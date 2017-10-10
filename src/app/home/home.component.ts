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
            this.slides = comeSoon;
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
}
