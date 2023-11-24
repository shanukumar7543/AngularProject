import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared';
import { KEYS, RoutesName } from '../../_constants';
declare var window: any;

@Component({
  selector: 'app-wallet-connection-modal',
  templateUrl: './wallet-connection-modal.component.html',
  styleUrls: ['./wallet-connection-modal.component.scss']
})
export class WalletConnectionModalComponent implements OnInit {
  metamaskAddress: any;
  isGetWallets: boolean = false;

  constructor(
    private matDialog: MatDialog,
    public matDialogRef: MatDialogRef<WalletConnectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  /**
   * Connect App to MetaMask wallet
   */
  connectWallet(flag: string) {
    if (this.isGetWallets) {
      this.goToWalletSite(flag);
      return;
    }
    this.matDialogRef.close('success');
    let ethereum: any = window['ethereum'];
    if (typeof ethereum !== "undefined") {
      try {
        ethereum.request({
          method: "wallet_requestPermissions",
          params: [
            {
              eth_accounts: {}
            }
          ]
        }).then((address: any) => {
          if (address[0]) {
            this.metamaskAddress = address[0].caveats[0].value[0];
            localStorage.setItem(KEYS.MPA, this.metamaskAddress);
            const data: any = {
              title: '',
              icon: 'fa fa-check-square',
              message: 'Wallet connected successfully.'
            };
            this.showStatus(data);
            setTimeout(() => {
              location.href = RoutesName.ACTIVATE_ACCOUNT + `?amount=${this.data.amount}`;
            }, 1000);
          }
        });
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      const data = {
        title: 'Please Install Metamask',
        message: 'to download MetaMask Wallet',
        link: 'https://metamask.io/download',
        cancelBtnLabel: 'Cancel'
      };
      this.showStatus(data);
    }
  }

  goToWalletSite(flag: string) {
    switch (flag) {
      case 'metamask':
        window.open('https://metamask.io/', '_blank');
        break;
      case 'walletconnect':
        window.open('https://walletconnect.com/', '_blank');
        break;
      case 'coinbase':
        window.open('https://www.coinbase.com/', '_blank');
        break;
    }
  }

  /**
   * On successfull payment
   */
  showStatus(data: any) {
    this.matDialog.open(ConfirmDialogComponent, {
      width: '350px',
      height: '370px',
      data,
      disableClose: true
    }).afterClosed().subscribe((result: any) => {
    });
  }
}
