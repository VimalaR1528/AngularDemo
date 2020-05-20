import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productFun():Product[]{
    return [
      {proId:11,proName:"Pen",proDesc:"marker"},
      {proId:12,proName:"Soap",proDesc:"bathing"},
      {proId:13,proName:"Bag",proDesc:"handbag"},
      {proId:14,proName:"watch",proDesc:"Wrist watch"}
    ];
  }
}
