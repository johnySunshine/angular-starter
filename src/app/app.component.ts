/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        `
        header {
            position: fixed;
            z-index: 999;
            top: 0;
            width: 100%;
            height: 56px;
        }

        main {
            //position: relative;
            //top: 60px;
            min-height: 720px;
            width: 1360px;
            margin: 60px auto 0;
            padding: 0 46px;
            display: block;
        }

        footer {
            position: relative;
            width:100%;
        }
        `
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

}
