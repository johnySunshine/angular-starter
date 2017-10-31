export interface Mask {
    spinnerPercent?: string;
    isShowPercent?: boolean;
    // 主标题
    title1?: string;
    // 位于主标题上方
    title2?: string;
    // 位于主标题下方
    title3?: string;
    // 位于海报的右下角
    title4?: string;
}

export interface Poster {
    id: string;
    url: string;
    defaultPictureName: string;
    title?: string;
    subTitle?: string;
    mask?: Mask;
}
