import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    this.checkTheme();

  }
  checkTheme() {

    let theme = localStorage.getItem('theme')
    if (theme) {
      document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme)
    } else {
      document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'light')
    }
  }
  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme);
  }
}
