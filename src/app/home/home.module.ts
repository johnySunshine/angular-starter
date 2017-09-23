import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { ShareModule } from '../share/share.module';
import { ComeSoonResolver } from './home.resolver';
import { MdButtonModule } from '@angular/material';

@NgModule({
    imports: [
        ShareModule,
        HomeRoutingModule,
        MdButtonModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [ComeSoonResolver]
})
export class HomeModule {
}
