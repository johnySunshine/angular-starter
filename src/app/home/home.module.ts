import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';
import { ComeSoonResolver } from './home.resolver';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [ComeSoonResolver]
})
export class HomeModule {
}
