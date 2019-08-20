import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
    @Output() navToggle = new EventEmitter<boolean>();
    search: boolean;

    constructor(private elementRef: ElementRef) {
        this.search = false;
    }
    @HostListener('document:click', ['$event.target'])
    public onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.search = false;
        }
    }

    public navOpen() {
        this.navToggle.emit(true);
    }

    public toggle() {
        this.search = !this.search;
    }
}
