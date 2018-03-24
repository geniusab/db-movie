import { Component, HostBinding, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { IMAGE_DEFAULT_SIZE } from '../../app.config';
import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.sass'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.ch-animation, .details', style({transform: 'translateY(-100px)', opacity: 0})),
        query('.details .area, .details .brand-card', style({transform: 'translateY(100px)', opacity: 0})),
        query('.ch-animation, .details, .details .area, .details .brand-card', [
          stagger(100, [
            animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', group([
        query('.ch-animation', [
          animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(-100px)', opacity: 0}))
        ]),
        query('.details, .details .area, .details .brand-card', [
          stagger(-100, [
            animate('500ms 100ms cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(-100px)', opacity: 0}))
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
  public text = ['el efficitur.', 'el efficitur.', 'el efficitur.', 'el efficitur.', 'el efficitur.', 'el efficitur.'];

  constructor(private filmService: FilmService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    // this.getPopularFilm(this.page);
    this.activatedRoute.data.subscribe((data: { users: Film[] }) => {
      console.log(data['popular-films']);
      this.Films = data['popular-films']['results'] || [];
    });
  }

  public getPopularFilm(page) {
    this.filmService.getPopularFilm(page)
      .subscribe((data: Film[]) => {
        this.Films = data['results'];
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
