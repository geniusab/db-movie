import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmPopularsResolver } from './popular-films/popular-films.resolver';

const routes: Routes = [
  {path: '', component: PopularFilmsComponent,
    resolve: {
      'popular-films': FilmPopularsResolver
    },
    pathMatch: 'full'},
  { path: 'film/:id',     component: DetailFilmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
