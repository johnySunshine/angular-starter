import { DEFAULT_APP_CONFIG } from '../../config';
import { Options } from './options';

export class HttpServiceTool {

    public _sendRequest(reqName: string, options: Options) {

    }

    public getFullUrls(APIUrl: string): string {
        let isDevEnvironment = ENV === 'development';
        let httpService = isDevEnvironment ? DEFAULT_APP_CONFIG.PRODUCT_SERVICES_URL : DEFAULT_APP_CONFIG.DEV_SERVICES_URL;
        return httpService + APIUrl;
    }

    public urlJionOptions() {

    }
}