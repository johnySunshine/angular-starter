import {
    Component, ElementRef, Input,
    OnInit, ViewEncapsulation
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
    selector: `btn`,
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

    @Input()
    public disable: boolean;

    @Input()
    public isRoundButton: boolean;

    @Input()
    public isIconButton: boolean;

    private ele: HTMLElement;

    constructor(private elementRef: ElementRef) {
        this.ele = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        let spanEl = this.ele.children[0];
        spanEl.classList.add('button-ripple-round');
    }

    private _iconButtonFunc(): void {

    }

}