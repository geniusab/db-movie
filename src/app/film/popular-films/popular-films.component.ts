import { Component, HostBinding, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { IMAGE_DEFAULT_SIZE } from '../../app.config';
import { style, animate, group, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.sass'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.avatar, .details', style({ transform: 'translateY(-100px)', opacity: 0 })),
        query('.details .area, .details img', style({ transform: 'translateY(100px)', opacity: 0 })),
        query('.avatar, .details, .details .area, .details img', [
          stagger(100, [
            animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', group([
        query('.avatar', [
          animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100px)', opacity: 0 }))
        ]),
        query('.details, .details .area, .details img', [
          stagger(-100, [
            animate('500ms 100ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100px)', opacity: 0 }))
          ])
        ]),
      ])),
    ]),
  ]
})
export class PopularFilmsComponent implements OnInit {
  @HostBinding('@pageAnimation')
  public animatePage = true;
  public title = 'Popular Films';
  public imgUrl: string = IMAGE_DEFAULT_SIZE;
  public Films: Film[];
  public loading = false;
  public total = 20;
  public page = 1;
  public limit = 1;

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
  public goToPage(n: number): void {
    this.page = n;
    console.log(this.page);
    this.getPopularFilm(this.page);
  }

  public onNext() {
    this.page++;
    console.log(this.page);
    this.getPopularFilm(this.page);
  }

  public onPrev() {
    this.page--;
    console.log(this.page);
    this.getPopularFilm(this.page);
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
