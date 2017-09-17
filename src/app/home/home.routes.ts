import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ComeSoonResolver } from './home.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            // 首页重定向路由，去除原先空路由机制
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
                resolve: {
                comeSoon: ComeSoonResolver,
                //     filmShowTime: FilmShowTimeResolver,
                //     theaterMovie: InTheaterMovieResolver
                }
            }
        ])],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {
}
