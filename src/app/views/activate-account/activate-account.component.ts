import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../_services';
import { MintMembershipComponent } from '..';
import { FILES, KEYS, RoutesName } from '../../_constants';
import { ActivateAccount } from '../../_interfaces';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  activateAccount = {
    amount: 37,
    payment_period: 1,
    payment_frequency: 1
  } as ActivateAccount;
  files: any = FILES;
  routesName: any = RoutesName;
  calculateAmount: any = [0, 0, 0];
  walletAddress: any = localStorage.getItem(KEYS.MPA);
  amounts: any = this.activatedRoute.snapshot.queryParams['amount'] | 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * On change value of ranger
   */
  onChangeValue() {
    const calculateAmount = Math.round(this.activateAccount.amount / 12);
    this.calculateAmount = [];
    if (calculateAmount > 3) {
      for (let i = 0; i < calculateAmount; i++) {
        this.calculateAmount.push(0);
      }
    } else {
      this.calculateAmount = [0, 0, 0];
    }
  }

  mintMembershipProfile() {
    this.matDialog.open(MintMembershipComponent, {
      width: '400px',
      maxHeight: '600px'
    }).afterClosed().subscribe((result: any) => {
      if (result) {
      }
    });
  }

  /**
   * Disconnect wallet
   */
  disconnectWallet() {
    this.commonService.isDisconnectWallet.next(true);
  }

  /**
   * On submit to active account
   */
  onSubmit() {
    console.log(this.activateAccount)
  }
}
