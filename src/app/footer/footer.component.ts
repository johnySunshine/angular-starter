import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DEFAULT_APP_CONFIG } from '../config';
import { MoreLink } from './model/footer';
import * as _ from 'lodash';

const defaultConfig = DEFAULT_APP_CONFIG;

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class FooterComponent implements OnInit {

    public UtilityList: string[] = [];

    public moreLinks: MoreLink[];

    constructor() {
    }

    public ngOnInit(): void {
        let currentVersionStr: string = '当前版本:';
        this.UtilityList.push(defaultConfig.COPYRIGHT_INFO);
        this.UtilityList.push(defaultConfig.TECHNICAL_SUPPORT);

        this.UtilityList.push(defaultConfig.CURRENT_VERSION);
        this.UtilityList.push(currentVersionStr);
        this.packageMoreLinks();
    }

    public packageMoreLinks(): void {
        let moreLinkList: MoreLink[] = [
            {
                linkText: 'GitHub',
                linkUrl: defaultConfig.GITHUB_URL,
                iconUrl: '/assets/img/footer-logo/github.svg'
            },
            {
                linkText: 'Gitee',
                linkUrl: defaultConfig.GIT_OS_CHINA_URL,
                iconUrl: '/assets/img/footer-logo/git-oschina-logo.svg'
            },
        ];
        this.moreLinks = moreLinkList;
    }

    public showMoreLink(showMoreLink: string) {
        window.open(
            showMoreLink,
            'code', '', false
        );
    }
}