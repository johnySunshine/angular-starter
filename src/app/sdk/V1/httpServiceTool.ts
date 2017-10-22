import { DEFAULT_APP_CONFIG } from '../../config';
import * as _ from 'lodash';

export class HttpServiceTool {
    public getFullUrls(APIUrl: string): string {
        let isDevEnvironment = ENV === 'development';
        let httpService = isDevEnvironment ? DEFAULT_APP_CONFIG.DEV_SERVICES_URL : DEFAULT_APP_CONFIG.PRODUCT_SERVICES_URL;
        return httpService + '/' + DEFAULT_APP_CONFIG.SERVICE_VERSION + APIUrl;
    }

    public urlJionOptionsForGET(reqUrl: string, ...option): string {
        let url = this.getFullUrls(reqUrl);
        let options: string = '';
        if (option.length === 0) {
            return url;
        }
        _.each(option, (resp) => {
            options = options + resp;
        });
        return url + options;
    }

}