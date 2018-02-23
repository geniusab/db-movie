import { Component, OnInit } from '@angular/core';
import { Film } from "../film.model";
import { FilmService } from "../services/film.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { IMAGE_LG_SIZE, IMAGE_DEFAULT_SIZE } from "../../app.config";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.sass']
})
export class DetailFilmComponent implements OnInit {
  public film: Film;
  public backImg: string = IMAGE_LG_SIZE;
  public imgUrl: string = IMAGE_DEFAULT_SIZE;
  // public actors: ActorsFilm[];
  // public actorId: any = '';
  // public selectActor: any;
  constructor(private filmService: FilmService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public ngOnInit() {
    this.getFilm();
  }

  public getFilm() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.filmService.getDetailFilm(+params.get('id')))
      .subscribe((film: Film) => {
        this.film = film;
      }, (error) => {
        console.log(error);
      })
  }

}
