import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Wallets } from '../../_interfaces';
import { ConfirmDialogComponent } from '../../shared';
import { FILES, RoutesName, KEYS } from '../../_constants';
import { BuyMembershipComponent, WalletConnectionModalComponent } from '..';
import { CommonService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  metamaskAddress: any = localStorage.getItem(KEYS.MPA);
  themeClass: any = localStorage.getItem(KEYS.THEME);
  files: any = FILES;
  routesName: any = RoutesName;
  cryptoWallets: any = Wallets;
  amount: any = '';
  eyeIcon: string = FILES.EYE;
  isWalletConnected: any = false;
  isShowMembershipPlan: any = false;
  isShowAmountText = true;

  constructor(
    private matDialog: MatDialog,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.setDataInitially();
  }

  setDataInitially() {
    this.isWalletConnected = !!this.metamaskAddress;
    if (localStorage.getItem(KEYS.JOIN_MEMBERSHIP)) {
      this.isShowMembershipPlan = true;
    }
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

  showWalletDetials() {
    this.isWalletConnected = true;
    this.isShowMembershipPlan = false;
    localStorage.removeItem(KEYS.JOIN_MEMBERSHIP);
  }

  /**
   * Join membership
   */
  joinMembership(flag: boolean) {
    this.isShowMembershipPlan = flag;
    localStorage.setItem(KEYS.JOIN_MEMBERSHIP, 'YES');
    localStorage.removeItem(KEYS.MPA);
    this.isWalletConnected = false;
  }

  /**
   * On successfull payment
   */
  showStatus(data: any) {
    this.matDialog.open(ConfirmDialogComponent, {
      width: '350px',
      height: '370px',
      data
    });
  }

  /**
   * Disconnect wallet
   */
  disconnectWallet() {
    this.commonService.isDisconnectWallet.next(true);
  }

  buyMembership(amount: any) {
    this.matDialog.open(BuyMembershipComponent, {
      width: '400px',
      maxHeight: '600px',
      disableClose: true,
      data: { amount }
    }).afterClosed().subscribe((result: any) => {
      if (result) {
      }
    });
  }

  buy() {
    this.matDialog.open(WalletConnectionModalComponent, {
      width: '700px', height: '500px',
      disableClose: true,
      data: { amount: this.amount }
    }).afterClosed().subscribe((result: any) => {
      if (result) { }
    });
  }

  // /**
  //  * On payment completed
  //  * @param event payment response
  //  */
  // onPaymentSuccess(event: any) {
  //   if (event && event.token.id) {
  //     const data = {
  //       title: '',
  //       icon: 'fa fa-check-square',
  //       message: 'Payment completed successfully.',
  //       cancelBtnLabel: 'Okay'
  //     };
  //     this.showStatus(data);
  //     this.router.navigate([RoutesName.ACTIVATE_ACCOUNT]);
  //   }
  // }
}
