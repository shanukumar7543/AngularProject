import { Component, Input, OnInit } from '@angular/core';
import { FILES, RoutesName } from '../../_constants';

@Component({
  selector: 'app-property-shares',
  templateUrl: './property-shares.component.html',
  styleUrls: ['./property-shares.component.scss']
})
export class PropertySharesComponent implements OnInit {
  files: any = FILES;
  routesName: any = RoutesName;
  amount: any = 37;

  @Input() priceLabel: string = 'ABUNDANCE';

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
