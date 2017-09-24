import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import {
    TranslateLoader,
    TranslateModule,
    TranslateService,
    TranslateStaticLoader
} from 'ng2-translate';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { NoContentComponent } from './no-content';

import '../styles/styles.scss';
import { HomeModule } from './home/home.module';
import { SessionService, Platform, EPGService } from './sdk';
import { requestOptionsProvider } from './app.request';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { MdProgressSpinnerModule } from '@angular/material';
import { FooterModule } from './footer';
// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    SessionService,
    Platform,
    EPGService,
    requestOptionsProvider,
    SpinnerService
];

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NoContentComponent,
        SpinnerComponent
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        HttpModule,
        HeaderModule,
        FooterModule,
        HomeModule,
        BrowserModule,
        BrowserAnimationsModule,
        MdProgressSpinnerModule,
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        }),
        // 配置语言包
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {

    constructor(public appRef: ApplicationRef,
                public appState: AppState,
                public translateService: TranslateService) {
        translateService.setDefaultLang('en');
        translateService.use('cn');
    }
}
