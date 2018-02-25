import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PeopleService} from '../people.service';
import {People} from '../people.model';
import 'rxjs/add/operator/switchMap';
import {IMAGE_DEFAULT_SIZE} from '../../app.config';
@Component({
    selector: 'app-people-detail',
    templateUrl: './people-detail.component.html',
    styleUrls: ['./people-detail.component.sass']
})
export class PeopleDetailComponent implements OnInit {
    public people: People;
    public imgUrl: string = IMAGE_DEFAULT_SIZE;
    constructor(private apiServices: PeopleService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getPeopleById();
    }
    getPeopleById() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.apiServices.getPeople(+params.get('id')))
            .subscribe((data: People) => {
                this.people = data;
            }, (error) => {
                console.log(error);
            });
    }
}
