import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';
import { CarouselResolver, ComeSoonWithMtimeResolver } from './home.resolver';
import { HomeMoreComponent } from './home-more';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        HomeMoreComponent
    ],
    providers: [ComeSoonWithMtimeResolver, CarouselResolver]
})
export class HomeModule {
}
