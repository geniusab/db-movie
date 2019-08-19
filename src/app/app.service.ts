import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable()
export class AppService {
    public languageEn = 'en-US';
    private apiKey = 'e1930df30bc3ae532084ae8399ac8913';

    constructor(private http: HttpClient) {
    }

    public get(pathName: string, page?: string, params?) {
        params = new HttpParams()
            .append('api_key', this.apiKey)
            .append('page', page || '1')
            .append('language', this.languageEn);
        return this.http.get(pathName, {params}).pipe(
            catchError(this.handleError('get', []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log('AppService', message);
        // this.messageService.add('HeroService: ' + message);
    }
}
