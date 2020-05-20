import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  provalue:Product[];
  constructor(private proServ:ProductService) { }

  ngOnInit(): void {
    this.provalue=this.proServ.productFun();
  }

}
