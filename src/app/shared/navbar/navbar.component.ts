import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()  showSideBar!: boolean;

  @Output() ToggleSideBar: EventEmitter<boolean> = new EventEmitter();

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
    this.ToggleSideBar.emit(this.showSideBar);
  }
}
