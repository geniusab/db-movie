import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

const routes: Routes = [
  { path: 'popular-films',
    component: PopularFilmsComponent },
  { path: 'film/:id',     component: DetailFilmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
