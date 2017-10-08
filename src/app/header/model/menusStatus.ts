import { MenuTypes } from './menus.enum';

export interface MenuData {
    menuTitle?: string;
    counts?: number;
}

export interface MenusStatus {
    status: MenuTypes;
    menuData: MenuData;
}
