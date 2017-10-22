import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';
import { CarouselResolver, ComeSoonWithMtimeResolver } from './home.resolver';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [ComeSoonWithMtimeResolver, CarouselResolver]
})
export class HomeModule {
}
