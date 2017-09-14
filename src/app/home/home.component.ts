import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { MenusStatus } from '../header/model/menusStatus';
import { MenuTypes } from '../header/model/menus.enum';
import { Poster, PosterMask } from '../share/playbill-poster/model/poster';
import { Slide, SlideHeader, SlideTypes } from '../share/slide-list/model/slide';

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

    public poster: Poster = {
        id: '1234',
        posterUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2498371582.jpg',
        posterTitle: '猩球崛起3：终极之战',
        posterSubtitle: '劇場版 ソードアート・オンライン -オーディナル・スケール',
        height: '277.9px',
        width: '198.5px'

    };
    public posterMask: PosterMask = {
        rating: 8.3,
        // genres: '剧情 / 战争',
        duration: '20min',
        // title: this.poster.posterTitle

    };

    /**
     * TypeScript public modifiers
     */

    public posterTypes = SlideTypes.vertical;
    public posterTypes1 = SlideTypes.horizontal;

    public slides: Slide = {
        slideHeader: {
            title: '正在热映的影片',
        },
        playbillPosters: [
            {
                id: '1',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2498371582.jpg',
                posterMask: {
                    rating: 8.3
                }
            },
            {
                id: '2',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=477&y=662&src=http://programm-manager.telekom.de/media/gracenote/p13365032_v_v8_ak.jpg',
                posterMask: {
                    rating: 8.3
                }
            },
            {
                id: '1',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2498371582.jpg',
                posterMask: {
                    rating: 8.3
                }
            },
            {
                id: '2',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=477&y=662&src=http://programm-manager.telekom.de/media/gracenote/p13365032_v_v8_ak.jpg',
                posterMask: {
                    rating: 8.3
                }
            },
            {
                id: '1',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2498371582.jpg',
                posterMask: {
                    rating: 8.3
                }
            },
            {
                id: '2',
                posterTitle: '测试',
                posterSubtitle: '测试1',
                posterUrl: 'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=477&y=662&src=http://programm-manager.telekom.de/media/gracenote/p13365032_v_v8_ak.jpg',
                posterMask: {
                    rating: 8.3
                }
            }
        ]
    };

    constructor(public appState: AppState) {
        this.appState.session.put('demo', {
            name: 1
        });
    }

    public ngOnInit() {
        let menusStatus: MenusStatus = {
            status: MenuTypes.normal,
            menuData: '1'
        };
        this.appState.triggerEvent(menusStatus);
        /**
         * this.title.getData().subscribe(data => this.data = data);
         */
    }

    public submitState(value: string) {
        this.localState.value = '';
    }
}
