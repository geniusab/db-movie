import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { IMAGE_DEFAULT_SIZE } from '../../app.config';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.sass']
})
export class PopularFilmsComponent implements OnInit {

  public imgUrl: string = IMAGE_DEFAULT_SIZE;
  public Films: Film[];
  public page: number = 3;

  constructor(private filmService: FilmService,
              private router: Router) {
  }

  public ngOnInit() {
    this.getPopularFilm(this.page);
  }


  public getPopularFilm(page) {
    this.filmService.getPopularFilm(page)
      .subscribe((Films: Film[]) => {
          this.Films = Films['results'];
        });

  }

  // public getFilms() {
  //   this.filmService.getFilms('matrix', 1)
  //     .subscribe(
  //       Films => this.Films = Films,
  //       error => this.errorMessage = <any>error);
  //
  // }
  //
  // // public onSelect(film): void {
  // //   this.selectFilm = film;
  // // }
  // public showDetail(): void {
  //   this.router.navigate(['/detail', this.selectFilm.id])
  // }
  //
  // public nextFilm(page: any): void {
  //   this.page += 1;
  //
  //   this.filmService.getPopularFilm(`${this.page}`)
  //     .subscribe(
  //       Films => this.Films = Films,
  //       error => this.errorMessage = <any>error);
  // }

}
