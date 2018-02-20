import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ROUTES } from './app.routing'
import { FilmModule } from './film/film.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FilmModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
