import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '../film.model';
import { FilmService } from '../services/film.service';


@Injectable()
export class FilmPopularsResolver implements Resolve<Film[]> {
  public page = '1';

  constructor(private filmService: FilmService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.filmService.getPopularFilm(this.page);
  }
}
