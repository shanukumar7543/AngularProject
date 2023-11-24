import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FILES, KEYS, RoutesName } from '../../_constants';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss']
})
export class MenuItemsListComponent implements OnInit {
  routesName: any = RoutesName;
  files: any = FILES;
  themeClass: any = localStorage.getItem(KEYS.THEME);
  eyeIcon: string = FILES.EYE;
  isShowOtherMenu = this.router.url.search('/home') !== -1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setDynamicIcon();
  }

  /**
   * Change theme
   */
  changeTheme() {
    document.body.classList.remove(this.themeClass);
    this.themeClass = this.themeClass === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem(KEYS.THEME, this.themeClass);
    document.body.classList.add(this.themeClass);
    this.setDynamicIcon();
  }

  /**
   * Set eye icon dynamic
   */
  setDynamicIcon() {
    this.eyeIcon = this.themeClass === 'light-theme' ? FILES.EYE_SLASH : FILES.EYE;
  }
}
