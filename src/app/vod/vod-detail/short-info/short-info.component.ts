import { Component, Input, OnInit } from '@angular/core';
import { ShortInfo } from '../model/shortInfo';

@Component({
    selector: 'short-info',
    templateUrl: 'short-info.component.html',
    styleUrls: ['short-info.component.scss']
})

export class ShortInfoComponent implements OnInit {
    @Input()
    public shortInfos: ShortInfo[];

    constructor() {
    }

    public ngOnInit(): void {
    }
}