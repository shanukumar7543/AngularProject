import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LimitedOfferComponent, YourPurchaseComponent, BuyShareComponent
} from '../index';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LimitedOfferComponent,
    YourPurchaseComponent,
    BuyShareComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OfferRoutingModule,
    SharedModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferModule { }
