import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    constructor() {
    }

    /**
     * 设置图片尺寸
     * @param {string} imgURL
     * @param {string} imgSize
     * @returns {string}
     */
    public setPictureSize(imgURL: string, imgSize: string): string {
        let urlList = imgURL.split('_');
        let Suffix = urlList[1].split('.')[1];
        return urlList[0] + '_' + imgSize + '.' + Suffix;
    }
}