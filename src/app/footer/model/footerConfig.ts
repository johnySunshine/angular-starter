import { DEFAULT_APP_CONFIG } from '../../config';
import { FooterLink, MoreLink } from './footer';

const config = DEFAULT_APP_CONFIG;
export const MORE_LINKS: MoreLink[] = [
    {
        linkText: 'GitHub',
        linkUrl: config.GITHUB_URL,
        iconUrl: '/assets/img/footer-logo/github.svg'
    },
    {
        linkText: 'Gitee',
        linkUrl: config.GIT_OS_CHINA_URL,
        iconUrl: '/assets/img/footer-logo/git-oschina-logo.svg'
    },
    {
        linkText: 'Angular',
        linkUrl: config.ANGULAR_URL,
        iconUrl: '/assets/img/footer-logo/angular.svg'
    }
];

export const FOOTER_UTILITY_LINKS: FooterLink[] = [
    {
        linkId: 'COPYRIGHT',
        linkText: 'COPYRIGHT',
        linkUrl: ''
    },
    {
        linkId: 'ABOUT',
        linkText: 'ABOUT',
        linkUrl: ''
    },
    {
        linkId: 'HELP',
        linkText: 'HELP',
        linkUrl: ''
    },
    {
        linkId: 'PLATFORM',
        linkText: 'PLATFORM',
        linkUrl: ''
    }
];
