import { RouterModule, Routes } from '@angular/router';

import { PackagesPage } from './pages/packages/packages.pages'; 
import { CheckoutPage } from './pages/checkout/checkout.pages'; 
import { BillingPage } from './pages/billing/billing.pages';


const appRoutes: Routes = [
  { path : 'packages' , component : PackagesPage },
  { path : 'billing' , component : BillingPage },
  { path : 'checkout' , component : CheckoutPage },
  
  {
    path : '',
    redirectTo : '/packages',
    pathMatch : 'full'
  }
]

export const RouterConfig = [
  RouterModule.forRoot(
    appRoutes,{
      enableTracing : false,
      useHash : false
  })

];

export const RouterDeclarations = [ PackagesPage , BillingPage , CheckoutPage ];


