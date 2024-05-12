import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  darkMode:boolean = false
  @Input()  showSideBar!: boolean;

  @Output() ToggleSideBar: EventEmitter<boolean> = new EventEmitter();

  constructor(private _global:GlobalService) {}
  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
    this.ToggleSideBar.emit(this.showSideBar);
  }
  changeTheme(theme:string) {
    this._global.changeTheme(theme);
    let x = localStorage.getItem('theme')
    this.darkMode = x == 'dark'? true : false
  }
}
