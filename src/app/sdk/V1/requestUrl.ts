import { DEFAULT_APP_CONFIG } from '../../config';

const PRO_URLS = DEFAULT_APP_CONFIG.PRODUCT_SERVICES_URL;
const DEV_URL = DEFAULT_APP_CONFIG.DEV_SERVICES_URL;
export const urlOptions = {
    MenuList: PRO_URLS + `/V1/Menus/list`,
    ComeSoon: PRO_URLS + `/V1/DouBan/movie/comeSoon`,
    VODDetail: PRO_URLS + `/V1/DouBan/movie/comeSoon`,
    VodPhotos: PRO_URLS + `/V1/DouBan/movie/comeSoon`
};
export const UrlDev = {
    MenuList: DEV_URL + `/V1/Menus/list`,
    ComeSoon: `/assets/mock-data/comeSoon.json`,
    VODDetail: `/assets/mock-data/VODDetail.json`,
    VodPhotos: `/assets/mock-data/vodPhoto.json`
};
