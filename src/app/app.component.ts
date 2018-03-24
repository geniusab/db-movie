import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {MatSidenav} from '@angular/material';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public title;
    @ViewChild('mainNav') public mainNav;

    constructor() {
      // this.mySuperService.sidenav = this.mainNav;
      // router.events.subscribe((event) => {
      //     if (event instanceof RoutesRecognized) {
      //         this.sidenav.close();
      //         if (event.url === '/popular-films' || event.url === '/') {
      //             this.title = 'Popular Films';
      //         } else if (event.url === '/people-list') {
      //             this.title = event.url
      //                 .charAt(1).toUpperCase() + event.url.slice(1, event.url.length)
      //                 .replace('-', ' ');
      //         }
      //     }
      // });
    }
}
