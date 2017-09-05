import {
    Component, Input,
    OnInit, ViewEncapsulation
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
    selector: `btn`,
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

    @Input()
    public types;

    public ngOnInit(): void {
    }

}