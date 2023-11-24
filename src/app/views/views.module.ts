import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivateAccountComponent, HomeComponent, ViewsComponent, PropertySharesComponent,
  BuyMembershipComponent, WalletConnectionModalComponent, MintMembershipComponent
} from './index';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    PropertySharesComponent,
    ActivateAccountComponent,
    BuyMembershipComponent,
    WalletConnectionModalComponent,
    MintMembershipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
