import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ShareModule } from '../share';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { HeaderMoreComponent } from './header-more';

@NgModule({
    imports: [
        ShareModule,
        RouterModule,
    ],
    declarations: [
        HeaderComponent,
        HeaderMoreComponent
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