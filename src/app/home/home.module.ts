import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
