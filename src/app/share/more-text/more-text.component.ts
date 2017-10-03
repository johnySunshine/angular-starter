/**
 * Created by Fantasy on 2017/5/5.
 */
import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'more-text',
    template: `
        <div class="more-text-wrap mat-body-strong">
            <ng-content></ng-content>
        </div>
        <div class="more-text-button">
            <a class="button-a material-icons md-light" md-icon-button (click)="showMore()"
               [class.button-transform]="!defaultSwitch">
                <md-icon>expand_more</md-icon>
            </a>
        </div>
    `,
    styleUrls: ['./more-text.component.scss'],
})
export class MoreTextComponent implements OnInit, AfterViewInit {

    @Input()
    public showLine: number = 0;

    @Input()
    public lineHeight: number = 0;

    public defaultSwitch: boolean;

    public _el: HTMLElement;

    public moreTextRef: HTMLElement;

    public defaultText: string;

    public converseText: string;

    constructor(public element: ElementRef) {
        this.defaultSwitch = true;
        this._el = <HTMLElement> element.nativeElement;
    }

    public ngOnInit() {
        this._el.style.lineHeight = this.lineHeight + 'px';
    }

    public ngAfterViewInit(): void {
        this.beginConverse();
    }

    public showMore(): void {
        this.moreTextRef.textContent = this.defaultSwitch ? this.defaultText : this.converseText;
        this.defaultSwitch = !this.defaultSwitch;
    }

    public beginConverse(): void {
        this.getMoreTextRef();
        this.getDefaultText();
        this.moreButtonStatus();
        while (this.showTextHeight() <= this.currentTextHeight()) {
            this.moreTextRef.textContent = this.moreTextRef
                .textContent
                .replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, '...');
        }
        this.converseText = this.moreTextRef.textContent;
    }

    /**
     * 按钮显示和隐藏状态
     */
    public moreButtonStatus() {
        let isShowButton = this.showTextHeight() <= this.currentTextHeight();
        let buttonEle = <HTMLElement> this._el.querySelector('.more-text-button');
        buttonEle.style.display = isShowButton ? 'inline-block' : 'none';
    }

    public getDefaultText(): void {
        this.defaultText = this.moreTextRef.textContent;
    }

    /**
     * 设置的文本宽度
     * @returns {number}
     */
    public showTextHeight(): number {
        return this.lineHeight * this.showLine || 0;
    }

    public currentTextHeight(): number {
        return this.moreTextRef.offsetHeight || 0;
    }

    /**
     * 文本模块
     * @returns {HTMLElement}
     */
    public getMoreTextRef() {
        this.moreTextRef = <HTMLElement> this._el.querySelector('.mat-body-strong');
    }
}
