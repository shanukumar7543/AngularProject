import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FILES } from '../../_constants';

@Component({
  selector: 'app-buy-membership',
  templateUrl: './buy-membership.component.html',
  styleUrls: ['./buy-membership.component.scss']
})
export class BuyMembershipComponent implements OnInit {
  files: any = FILES;
  isShowUSDT: boolean = false;
  currentDay: any = new Date().getDate();

  constructor(
    public matDialogRef: MatDialogRef<BuyMembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): any {
    this.setDate();
  }

  /**
   * Set date with th / st / nd / rd
   */
  setDate() {
    let lable = 'th';
    if (this.currentDay > 3 && this.currentDay < 21) {
      lable = 'th';
      this.currentDay = this.currentDay + lable;
      return;
    }
    switch (this.currentDay % 10) {
      case 1: lable = "st"; break;
      case 2: lable = "nd"; break;
      case 3: lable = "rd"; break;
      default: lable = "th"; break;
    }
    this.currentDay = this.currentDay + lable;
  }

  /**
   * Show USDT section
   */
  showUSDT(flag: boolean) {
    this.isShowUSDT = flag;
  }
}
