import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../people.service';
import {People} from '../people.model';
import {IMAGE_DEFAULT_SIZE} from '../../app.config';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.sass']
})
export class PeopleListComponent implements OnInit {
    public people: People[];
    public imgUrl: string = IMAGE_DEFAULT_SIZE;
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
