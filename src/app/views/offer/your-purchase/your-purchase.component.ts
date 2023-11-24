import { Component, OnInit } from '@angular/core';
import { FILES, RoutesName } from '../../../_constants';

@Component({
  selector: 'app-your-purchase',
  templateUrl: './your-purchase.component.html',
  styleUrls: ['./your-purchase.component.scss']
})
export class YourPurchaseComponent implements OnInit {
  files: any = FILES;
  routesName: any = RoutesName;
  percentage: any = 52;

  constructor() { }

  ngOnInit(): void {
  }
}
