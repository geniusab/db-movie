import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { FilmService } from './services/film.service';
import { MatModule } from '../shared/mat/mat.module';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ExtractElementsPipe } from '../shared/pips/extract-elements.pipe';
import { ReplaceSumPipe } from '../shared/pips/replace-sum.pipe';
import { SearchComponent } from '../search/search.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatModule
  ],
  declarations: [PopularFilmsComponent, DetailFilmComponent, ExtractElementsPipe, ReplaceSumPipe, SearchComponent, PaginationComponent],
  providers: [FilmService]
})
export class FilmModule {
}
