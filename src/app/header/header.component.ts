import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from './header.service';
import { Menu } from './model/menu';
import { MenuTypes } from './model/menus.enum';
import { AppState } from '../app.service';
import { MenusStatus } from './model/menusStatus';
import { fadeInSubMenu, slideSubMenu } from './header.animation';
import { DEFAULT_APP_CONFIG } from '../config';
import * as _ from 'lodash';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [fadeInSubMenu, slideSubMenu]
})

export class HeaderComponent implements OnInit {

    public mainMenus: Menu[];

    public menuTypes: MenuTypes;

    public menuDetail: string;

    public counts: number;

    public isRotate: boolean;

    public subMainMenu: Menu[];

    public appLogoTitle: string = DEFAULT_APP_CONFIG.LOGIN_SUBTITLE;

    public menuButtonStatus: string = 'menu';

    constructor(private headerService: HeaderService, private appService: AppState) {
        this.menuTypes = MenuTypes.normal;
    }

    public ngOnInit(): void {
        this.headerService.getMenus().subscribe((menus) => {
            this.mainMenus = _.filter(menus, (menu: Menu) => {
                return menu.menuVisible === true;
            });
            this.subMainMenu = menus;
        });
        this.menuDetail = '1';
        this.isRotate = false;
        this.onChangeEvent();
    }

    public menuShowMore(): void {
        this.isRotate = !this.isRotate;
        this.menuIconChange();
    }

    public subMoreTrigger(event: boolean): void {
        this.isRotate = event;
        this.menuIconChange();
    }

    public onChangeEvent(): void {
        this.appService.onEvent().subscribe((notification: MenusStatus) => {
            let {status, menuData} = notification;
            this.menuTypes = status;
            switch (status) {
                case  MenuTypes.normal:
                    break;
                case  MenuTypes.detail:
                    this.menuDetail = menuData.menuTitle;
                    break;
                case  MenuTypes.dropDown:
                    break;
                case MenuTypes.search:
                    this.counts = 20;
                    this.menuDetail = '搜索';
                    break;
                default:
                    break;
            }
        });
    }

    public menuIconChange() {
        this.menuButtonStatus = this.isRotate ? 'close' : 'menu';
    }
}
