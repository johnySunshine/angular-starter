import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-more',
    templateUrl: 'home-more.component.html',
    styleUrls: ['./home-more.component.scss']
})

export class HomeMoreComponent implements OnInit {

    public homeTitle: string = 'HOME_MORE_TITLE';

    constructor() {
        document.documentElement.scrollTop = 0;
    }

    public ngOnInit(): void {
    }
}