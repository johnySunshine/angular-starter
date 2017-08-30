import {
    Component,
    OnInit, ViewEncapsulation
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
    selector: 'buttons',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

    public ngOnInit(): void {
    }

}