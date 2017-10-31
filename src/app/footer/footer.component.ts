import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FooterLink, MoreLink } from './model/footer';
import { FOOTER_UTILITY_LINKS, MORE_LINKS } from './model/footerConfig';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class FooterComponent implements OnInit {

    public footerUtilityList: FooterLink[];

    public moreLinks: MoreLink[];

    constructor() {
    }

    public ngOnInit(): void {
        this.moreLinks = MORE_LINKS;
        this.footerUtilityList = FOOTER_UTILITY_LINKS;
    }

    public showMoreLink(showMoreLink: string) {
        window.open(
            showMoreLink,
            'code', '', false
        );
    }

    public footerLinkMore(linkId: string) {
        console.log(linkId);
    }

}
