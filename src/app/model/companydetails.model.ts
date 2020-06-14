import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel{
  
  public companyInfo : any = 
    {
      name : 'TourWorld',
      address : 'No: 3,Initium Road',
      city: 'Dehiwala',
      pincode: '10350',
      email: 'customer.care@tourworld.com',
      phone : '011-43232123'
    }
    
  
} 