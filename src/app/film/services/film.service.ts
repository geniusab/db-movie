import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_MOVIE_URL } from '../../app.config';

@Injectable()
export class FilmService {
  public page: string = '1';
  public languageEn: string = 'en-US';
  private apiKey: string ='e1930df30bc3ae532084ae8399ac8913';
  constructor(private http: HttpClient) { }

  public getPopularFilm (page?: number) {
    const params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('page', this.page || '1')
      .append('language', this.languageEn);

    return this.http.get(`${API_MOVIE_URL}/popular`, {params: params})
  }

}
