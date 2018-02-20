import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularFilmsComponent } from './popular-films/popular-films.component';

const routes: Routes = [
  { path: 'popular-films',
    component: PopularFilmsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
