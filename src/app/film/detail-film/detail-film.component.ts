import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import 'rxjs/add/operator/switchMap';
import { IMAGE_LG_SIZE, IMAGE_DEFAULT_SIZE } from '../../app.config';
import { ActorsFilm } from '../../people/people.model';

@Component({
    selector: 'app-detail-film',
    templateUrl: './detail-film.component.html',
    styleUrls: ['./detail-film.component.sass']
})
export class DetailFilmComponent implements OnInit {
    public film: Film;
    public backImg: string = IMAGE_LG_SIZE;
    public imgUrl: string = IMAGE_DEFAULT_SIZE;
    public actors: ActorsFilm[];

    constructor(private filmService: FilmService,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.getFilm();
        this.getActorFilm();
    }

    public getFilm() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.filmService.getDetailFilm(+params.get('id')).subscribe((film: Film) => {
                this.film = film;
            }, (error) => {
                console.log(error);
            });
        });
    }

    getActorFilm() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.filmService.getCredits(params.get('id')).subscribe((actors: ActorsFilm[]) => {
                    this.actors = actors['cast'];
                    // this.actors = actors['cast'].splice(0, 7);
                    console.log(actors);
                },
                (error: any) => {
                    console.log(error);
                });
        });

    }

}
