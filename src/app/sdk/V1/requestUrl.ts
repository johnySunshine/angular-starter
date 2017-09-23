import { DEFAULT_APP_CONFIG } from '../../config';

const httpServicesUrls = DEFAULT_APP_CONFIG.HTTP_SERVICES_URL;
export const urlOptions = {
    MenuList: httpServicesUrls + `/V1/Menus/list`,
    ComeSoon: httpServicesUrls + `/V1/DouBan/movie/comeSoon`
};
export const UrlDev = {
    MenuList: `/assets/mock-data/menusList.json`,
    ComeSoon: `/assets/mock-data/comeSoon.json`
};
