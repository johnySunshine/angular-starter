import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from './header.service';
import { Menu } from './model/menu';
import { MenuTypes } from './model/menus.enum';

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

    constructor(private headerService: HeaderService) {
        this.menuTypes = MenuTypes.detail;
    }

    public ngOnInit(): void {
        this.headerService.getMenus().subscribe((menus) => {
            this.mainMenus = menus;
        });
        this.menuDetail = '1';
    }
}
