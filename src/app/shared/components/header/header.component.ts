import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  search: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  public navOpen() {
    this.navToggle.emit(true);
  }
  public toggle() {
    this.search = !this.search;
  }
}
