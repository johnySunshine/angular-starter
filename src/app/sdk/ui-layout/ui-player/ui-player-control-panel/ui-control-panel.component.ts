import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ui-control-panel',
    templateUrl: 'ui-control-panel.component.html',
    styleUrls: ['./ui-control-panel.component.scss']
})

export class UiControlPanelComponent implements OnInit {

    @Input()
    public startTime: number;

    constructor() {
    }

    public ngOnInit(): void {
    }
}