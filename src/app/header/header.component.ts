import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from './header.service';
import { Menu } from './model/menu';
import { MenuTypes } from './model/menus.enum';
import { AppState } from '../app.service';
import { MenusStatus } from './model/menusStatus';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

    public mainMenus: Menu;

    public menuTypes: MenuTypes;

    public menuDetail: string;

    public counts: number;

    constructor(private headerService: HeaderService, private appService: AppState) {
        this.menuTypes = MenuTypes.normal;
    }

    public ngOnInit(): void {
        this.headerService.getMenus().subscribe((menus) => {
            this.mainMenus = menus;
        });
        this.menuDetail = '1';
        this.onChangeEvent();
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
