import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuTypes } from '../../header';
import { AppState } from '../../app.service';
import { Poster } from '../../sdk';
import { HomeService } from '../home.service';

const [
    viewWidth,
    slidingSpacing,
    horizontalRatio,
    verticalRatio,
    squareRatio
] = [
    1284,
    15,
    9 / 16,
    7 / 5,
    1,
];

@Component({
    selector: 'home-more',
    templateUrl: 'home-more.component.html',
    styleUrls: ['./home-more.component.scss']
})

export class HomeMoreComponent implements OnInit {

    public posterLength: number;

    public orignals: Poster[];

    public initShowPoster: Poster[];

    public width: number;
    public height: number;

    constructor(private route: ActivatedRoute,
                private appService: AppState,
                private homeService: HomeService) {
    }

    public ngOnInit(): void {
        this.route.data.subscribe((resp) => {
            document.documentElement.scrollTop = 0;
            let {homeMore} = resp;
            this.orignals = homeMore;
            this.initShowPoster = homeMore.slice(0, 18);
            this.posterLength = homeMore.length;
            this.changeMenuStatus();
            this.setUIPosterStyle();
        });
    }

    public changeMenuStatus(): void {
        this.appService.triggerMenusEvent({
            status: MenuTypes.search,
            menuData: {
                menuTitle: 'HOME.HOME_MORE_TITLE',
                counts: this.posterLength
            }
        });
    }

    public setUIPosterStyle(): void {
        let spacingNumber = 6 - 1;
        let spacingWidth = spacingNumber * slidingSpacing;
        let totalViewPosterWith = viewWidth - spacingWidth;
        this.width = totalViewPosterWith / 6;
        this.height = this.width * verticalRatio;
    }

    public onScrollByMouse($event): void {
        if (this.initShowPoster.length === this.orignals.length) {
            return;
        }
        let addCounts = this.initShowPoster.length + 8;
        this.initShowPoster = [...this.initShowPoster, ...this.orignals.slice(this.initShowPoster.length - 1, addCounts)];
    }

    public posterShowMore($event): void {
        let {posterId} = $event;
        this.homeService.gotoVodDetail(posterId);
    }
}