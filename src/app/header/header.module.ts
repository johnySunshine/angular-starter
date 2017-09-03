import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ShareModule } from '../share';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';

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
    ],
    providers: [
        HeaderService
    ]
})
export class HeaderModule {
}