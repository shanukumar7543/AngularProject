import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateAccountComponent, HomeComponent, ViewsComponent, PropertySharesComponent } from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ViewsComponent,

    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'property-shares', component: PropertySharesComponent },
      { path: 'activate-account', component: ActivateAccountComponent },
      {
        path: 'offer',
        loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
