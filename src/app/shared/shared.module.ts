import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxStripeModule } from 'ngx-stripe';
import {
    MenuItemsListComponent, MarketPriceComponent, ConfirmDialogComponent
} from './index';
import { MaterialModule } from '../material.module';
import { PaymentComponent } from './payment/payment.component';
import { StripeConfig } from '../_constants';

@NgModule({
    declarations: [
        MenuItemsListComponent,
        MarketPriceComponent,
        ConfirmDialogComponent,
        PaymentComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        NgxStripeModule.forRoot(StripeConfig.privateKey),
        MaterialModule
    ],
    entryComponents: [],
    exports: [
        MenuItemsListComponent,
        MarketPriceComponent,
        PaymentComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
