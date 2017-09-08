export interface Menu {
    id: number;
    menuSubId: number;
    menuTarget: string;
    menuTitle: string;
    menuUrl: string;
    menuVisible: boolean;
    subMenuList: Menu[];
}
