import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../shared';
import { FILES, KEYS, RoutesName } from '../_constants';
import { CommonService } from '../_services';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  files = FILES;
  routes: any = RoutesName;
  isHome = this.router.url.search(RoutesName.HOME) !== -1;
  isCollapsMenu = false;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.disconnectWalletEmitter();
  }

  /**
   * Disconnect Wallet emitter
   */
  disconnectWalletEmitter() {
    this.commonService.isDisconnectWallet.subscribe((res: any) => {
      if (res) {
        this.disconnectWallet();
      }
    })
  }

  /**
   * Disconnect wallet
   */
  disconnectWallet() {
    const data = {
      title: 'Are you sure?',
      message: 'Do you want to disconnect wallet?',
      okBtnLabel: 'Yes',
      cancelBtnLabel: 'No'
    };
    this.matDialog.open(ConfirmDialogComponent, {
      width: '350px', height: '370px', data
    }).afterClosed().subscribe((result: any) => {
      if (result) {
        localStorage.removeItem(KEYS.MPA);
        location.href = RoutesName.HOME;
      }
    });
  }
}
