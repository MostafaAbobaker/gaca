import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideBar:boolean= false;


  ToggleSideBar(event:any){
    this.showSideBar = event;
    console.log(this.showSideBar);

  }
}
