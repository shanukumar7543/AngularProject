import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KEYS } from './_constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MVP';
  themeClass: any = 'dark-theme';

  constructor(
    private router: Router,
  ) {
    if (!localStorage.getItem(KEYS.THEME)) {
      localStorage.setItem(KEYS.THEME, this.themeClass);
    } else {
      this.themeClass = localStorage.getItem(KEYS.THEME);
    }
    document.body.classList.toggle(this.themeClass);
  }

  ngOnInit(): void {
  }

  /**
   * On page route page scroll top
  * */
  onActive() {
    this.router.events.subscribe(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
}
