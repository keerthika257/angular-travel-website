import { Component } from '@angular/core';

@Component({
  selector : 'menu',
  template : `





  
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">
  <a class="navbar-brand" href="#" routerLink = '/products'><img src="https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794_960_720.jpg" class="logo mr-2"/>TourWorld</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink = '/products'>Products <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink = '/billing'>Billing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/checkout'>Checkout</a>
      </li>      
    </ul>
  </div>
</nav>
  `,

  styles:[`
    .logo{
      height: 60px;
      width: auto;
    }
  `]
})

export class MenuDir{

}