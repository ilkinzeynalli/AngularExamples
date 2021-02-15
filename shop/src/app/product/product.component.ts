import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';

declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
     private alertifyService: AlertifyService,
     private productService: ProductService,
     private activatedRoute:ActivatedRoute
  ) { }

  title: string = "Urun Listesi";
  filterText: string = "";

  products: Product[] = [];

  addToCart(product: Product) {
    this.alertifyService.success(product.name + ' added!');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p=>{
      let categoryId = p["categoryId"];

      this.productService.getProducts(categoryId).subscribe(data => {
        this.products = data;
      });
    })
    
  }

}
