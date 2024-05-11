import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showServices:boolean= false;

  @Input() showSideBar!: boolean;

  @Output() ToggleSideBar: EventEmitter<boolean> = new EventEmitter();

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
    this.ToggleSideBar.emit(this.showSideBar);
  }
}
