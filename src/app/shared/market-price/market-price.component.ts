import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-price',
  templateUrl: './market-price.component.html',
  styleUrls: ['./market-price.component.scss']
})
export class MarketPriceComponent implements OnInit {
  @Input() priceLabel: string = 'ABUNDANCE';

  constructor() { }

  ngOnInit(): void {
  }

}
