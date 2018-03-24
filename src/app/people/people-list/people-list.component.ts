import { Component, HostBinding, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { People } from '../people.model';
import { IMAGE_DEFAULT_SIZE } from '../../app.config';
import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass'],
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
export class PeopleListComponent implements OnInit {
  @HostBinding('@pageAnimation')
  public animatePage = true;
  public people: People[];
  public imgUrl: string = IMAGE_DEFAULT_SIZE;
  public title = 'People';

  constructor(private apiServices: PeopleService) {
  }

  public ngOnInit() {
    this.getPeople();
  }

  public getPeople() {
    this.apiServices.getPopularPeople().subscribe((data: People[]) => {
      this.people = data['results'];
    }, (error) => {
      console.log(error);
    });
  }
}
