import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {ROUTES} from './app.routing';
import {FilmModule} from './film/film.module';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {PeopleModule} from './people/people.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        SidebarComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FilmModule,
        PeopleModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false
        })
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
