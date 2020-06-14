import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class PackagesModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'Italy',
      product_weight : '3 Days 4 nights',
      product_price : '30000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p1.jpg'
    },
    {
      p_id : '2',
      product_name : 'England',
      product_weight : '3 Days 4 nights',
      product_price : '10000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p2.jpg'
    },
    {
      p_id : '3',
      product_name : 'France',
      product_weight : '3 Days 4 nights',
      product_price : '20000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p3.jpg'
    },
    {
      p_id : '4',
      product_name : 'India',
      product_weight : '3 Days 4 nights',
      product_price : '20000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p4.jpg'
    },
    {
      p_id : '5',
      product_name : 'Spain',
      product_weight : '3 Days 4 nights',
      product_price : '10000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p5.jpg'
    },
    {
      p_id : '6',
      product_name : 'Thailand',
      product_weight : '3 Days 4 nights',
      product_price : '30000',
      product_image : 'https://demos.onepagelove.com/html/tournest/assets/images/packages/p6.jpg'
    },
  ]
} 