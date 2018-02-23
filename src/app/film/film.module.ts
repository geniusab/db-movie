import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { FilmService } from './services/film.service';
import { MatModule } from '../shared/mat/mat.module';
import { DetailFilmComponent } from './detail-film/detail-film.component';

@NgModule({
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatModule
  ],
  declarations: [PopularFilmsComponent, DetailFilmComponent],
  providers: [FilmService]
})
export class FilmModule { }
