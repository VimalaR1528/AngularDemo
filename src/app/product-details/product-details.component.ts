import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { ProductDetails } from './ProductDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private prodets:ProductDetailsService) { }

  prodt:ProductDetails[];
  ngOnInit(): void {
    this.prodets.productFun().subscribe(data=>this.prodt=data);
  }

}
