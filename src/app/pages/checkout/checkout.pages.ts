import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PackagesModel } from '../../model/packages.model';

@Component({
  template:`
   <menu></menu>
  <div class="container">
   
     <checkout-dir
     [allProductList]="products.data"
     ></checkout-dir>
  </div>
`
})

export class CheckoutPage{
  public cartflag:boolean= false;
  constructor(   
    public cart: CartService,
    public products: PackagesModel

  ){

  }

  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 1000 )
  }

  
}