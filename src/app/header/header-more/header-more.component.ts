import {
    Component, EventEmitter,
    HostBinding, Input, OnInit, Output, ViewEncapsulation
} from '@angular/core';
import { Menu } from '../model/menu';
import { Router } from '@angular/router';

@Component({
    selector: 'header-more',
    templateUrl: 'header-more.component.html',
    styleUrls: ['./header-more.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderMoreComponent {

    @Input()
    public set menuList(menuList: Menu[]) {
        this._menuList = menuList;
    }

    @Output()
    public isSubTitleEmitter = new EventEmitter();

    public subMenuStatus: boolean;

    public _menuList: Menu[];

    constructor(private router: Router) {
        this.subMenuStatus = false;
    }

    public showMore(): void {
        this.closeSubMenu();
        this.isSubTitleEmitter.emit(this.subMenuStatus);
    }

    public jumpAddress(menuUrl: string): void {
        this.router.navigate(['./' + menuUrl]);
        this.closeSubMenu();
        this.isSubTitleEmitter.emit(this.subMenuStatus);

    }

    private closeSubMenu(): void {
        this.subMenuStatus = false;
    }
}
