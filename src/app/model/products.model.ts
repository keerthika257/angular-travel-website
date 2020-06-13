import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
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
    // {
    //   p_id : '7',
    //   product_name : 'Germany',
    //   product_weight : '3 Days 4 nights',
    //   product_price : '40000',
    //   product_image : 'https://rukminim1.flixcart.com/image/832/832/j3xbzww0/shaving-cream/w/m/j/418-classic-sensitive-skin-pre-shave-foam-gillette-original-imaeuyybxxppskgu.jpeg?q=70'
    // },
    // {
    //   p_id : '8',
    //   product_name : 'Singapore',
    //   product_weight : '3 Days 4 nights',
    //   product_price : '20000',
    //   product_image : 'https://rukminim1.flixcart.com/image/832/832/jesunbk0/shampoo/j/8/7/580-keratin-smooth-with-argan-oil-shampoo-tresemme-original-imaexrhqrrs6xqku.jpeg?q=70'
    // },
    // {
    //   p_id : '9',
    //   product_name : 'Australia',
    //   product_weight : '3 Days 4 nights',
    //   product_price : '30000',
    //   product_image : 'https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/shampoo/h/g/b/700-anti-hair-fall-shampoo-himalaya-original-imaeupg7sygzgqej.jpeg?q=70'
    // }
  ]
} 