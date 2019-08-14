import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { API_PEOPLE_URL } from '../app.config';
import { ActorsFilm, People } from './people.model';

@Injectable()
export class PeopleService {

    constructor(private appService: AppService) {
    }

    public getPopularPeople(page?: string): Observable<People[] | Object> {
        return this.appService.get(`${API_PEOPLE_URL}/popular`, page);
    }

    public getPeople(id: number): Observable<People | Object> {
        return this.appService.get(`${API_PEOPLE_URL}/${id}`);
    }

    /**
     * get Person One all films
     * @param id
     * @returns {Observable<any>}
     * ==========================================
     */
    public getActorFilms(id: number): Observable<ActorsFilm | Object> {
        return this.appService.get(`${API_PEOPLE_URL}/${id}/movie_credits`);
    }

}
