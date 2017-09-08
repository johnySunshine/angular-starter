import {
    Component, ElementRef, HostBinding, Input,
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

    @HostBinding('class.button-ripple-round')
    public roundButton: boolean;
    private ele: HTMLElement;

    constructor(private elementRef: ElementRef) {
        this.ele = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        this.roundButton = this.isIconButton;
    }

    private _iconButtonFunc(): void {

    }

}