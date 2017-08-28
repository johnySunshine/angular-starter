import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import {
    TranslateModule,
} from 'ng2-translate';

@NgModule({
    imports: [
        HomeRoutingModule,
        TranslateModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
