import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './ProductDetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  productFun():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>("https://jsonplaceholder.typicode.com/posts");
  }

  
}
