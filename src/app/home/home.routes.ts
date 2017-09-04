import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
                // resolve: {
                //     comeSoon: ComeSoonResolver,
                //     filmShowTime: FilmShowTimeResolver,
                //     theaterMovie: InTheaterMovieResolver
                // }
            },
            {
                path: 'home',
                component: HomeComponent,
                // resolve: {
                //     comeSoon: ComeSoonResolver,
                //     filmShowTime: FilmShowTimeResolver,
                //     theaterMovie: InTheaterMovieResolver
                // }
            }
        ])],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {
}