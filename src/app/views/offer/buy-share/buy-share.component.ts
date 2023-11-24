import { Component, Input, OnInit } from '@angular/core';
import { FILES, RoutesName } from '../../../_constants';

@Component({
  selector: 'app-buy-share',
  templateUrl: './buy-share.component.html',
  styleUrls: ['./buy-share.component.scss']
})
export class BuyShareComponent implements OnInit {
  files: any = FILES;
  amount: any = 37;
  routesName: any = RoutesName;

  @Input() priceLabel: string = 'ABUNDANCE';

  constructor() { }

  ngOnInit(): void {
  }

}
