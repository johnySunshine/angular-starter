import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from './header.service';
import { Menu } from './model/menu';
import { MenuTypes } from './model/menus.enum';
import { AppState } from '../app.service';
import { MenusStatus } from './model/menusStatus';
import { DEFAULT_APP_CONFIG } from '../sdk';
import { fadeInSubMenu, slideSubMenu } from './header.animation';

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

    public appLogoTitle: string = DEFAULT_APP_CONFIG.LOGIN_SUBTITLE;

    constructor(private headerService: HeaderService, private appService: AppState) {
        this.menuTypes = MenuTypes.normal;
    }

    public ngOnInit(): void {
        this.headerService.getMenus().subscribe((menus) => {
            this.mainMenus = menus;
        });
        this.menuDetail = '1';
        this.isRotate = false;
        this.onChangeEvent();
    }

    public menuShowMore(): void {
        this.isRotate = !this.isRotate;
    }

    public subMoreTrigger(event: boolean): void {
        this.isRotate = event;
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
}
