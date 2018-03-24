import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

    public menuItems = [
        {path: '/', title: 'Popular Films', icon: 'movie', class: ''},
        {path: '/people-list', title: 'People list', icon: 'person', class: ''},
    ];

    constructor() {
    }

    public ngOnInit() {
    }

}
