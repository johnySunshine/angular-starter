import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ShareModule } from '../share';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ShareModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}