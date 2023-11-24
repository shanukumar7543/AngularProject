import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimitedOfferComponent, YourPurchaseComponent, BuyShareComponent } from '../index';

const routes: Routes = [
  { path: '', component: LimitedOfferComponent },
  { path: 'your-purchase', component: YourPurchaseComponent },
  { path: 'buy-shares', component: BuyShareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRoutingModule { }
