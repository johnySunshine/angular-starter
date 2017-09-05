import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../model/menu';

@Component({
    selector: 'header-more',
    templateUrl: 'header-more.component.html',
    styleUrls: ['./header-more.component.scss']
})

export class HeaderMoreComponent implements OnInit {

    @Input()
    public set menuList(menuList: Menu[]) {
        this._menuList = menuList;
    }

    private _menuList: Menu[];

    constructor() {
    }

    public ngOnInit() {
    }
}