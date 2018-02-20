import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { FilmService } from './services/film.service';
import { MatModule } from '../shared/mat/mat.module';

@NgModule({
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatModule
  ],
  declarations: [PopularFilmsComponent],
  providers: [FilmService]
})
export class FilmModule { }
