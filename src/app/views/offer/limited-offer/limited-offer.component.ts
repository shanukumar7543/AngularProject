import { Component, Input, OnInit } from '@angular/core';
import { FILES, RoutesName } from '../../../_constants';

@Component({
  selector: 'app-limited-offer',
  templateUrl: './limited-offer.component.html',
  styleUrls: ['./limited-offer.component.scss']
})
export class LimitedOfferComponent implements OnInit {
  files: any = FILES;
  routesName: any = RoutesName;
  percentage = 40;
  amounts: any = 37;

  @Input() priceLabel: string = 'ABUNDANCE';

  constructor() { }

  ngOnInit(): void {
  }
}
