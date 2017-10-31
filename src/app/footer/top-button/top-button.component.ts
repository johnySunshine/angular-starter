import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';
import { toTopStateAnimate } from './top-button.animated';

@Component({
    selector: 'top-button',
    templateUrl: 'top-button.component.html',
    styleUrls: ['./top-button.component.scss'],
    animations: [toTopStateAnimate]
})

export class TopButtonComponent implements OnInit {
    public isShowButton: boolean = false;

    constructor() {
    }

    public ngOnInit(): void {
        let dom = document;
        Observable.fromEvent(window, 'scroll')
            .debounceTime(500)
            .subscribe(() => {
                let scrollTop = dom.body.scrollTop || dom.documentElement.scrollTop;
                this.isShowButton = scrollTop > 300;
            });
    }

    public toTopButtons(): void {
        let dom = document;
        let scrollTop = dom.body.scrollTop || dom.documentElement.scrollTop;
        dom.documentElement.scrollTop = scrollTop - 200;
        if (scrollTop > 0) {
            requestAnimationFrame(() => {
                this.toTopButtons();
            });
        }
    }
}