import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';
import { CarouselResolver, ComeSoonWithMtimeResolver, HomeMoreWithMTimeResolver } from './home.resolver';
import { HomeMoreComponent } from './home-more';
import { HomeService } from './home.service';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        HomeMoreComponent
    ],
    providers: [
        ComeSoonWithMtimeResolver,
        CarouselResolver,
        HomeMoreWithMTimeResolver,
        HomeService
    ]
})
export class HomeModule {
}
