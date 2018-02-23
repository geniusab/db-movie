import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_MOVIE_URL } from '../../app.config';
import { AppService } from "../../app.service";

@Injectable()
export class FilmService {

  constructor(private http: HttpClient, private appService: AppService) { }

  // public getPopularFilm (page?: number) {
  //   const params: HttpParams = new HttpParams()
  //     .append('api_key', this.apiKey)
  //     .append('page', this.page || '1')
  //     .append('language', this.languageEn);
  //
  //   return this.http.get(`${API_MOVIE_URL}/popular`, {params: params})
  // }

  public  getPopularFilm (page?: string) {
    return this.appService.get(`${API_MOVIE_URL}/popular`, page);
  }

  public getDetailFilm (id: number) {
    return this.appService.get(`${API_MOVIE_URL}/${id}`);
  }

}
