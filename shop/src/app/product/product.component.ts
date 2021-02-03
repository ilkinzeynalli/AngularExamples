import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title: string = "Urun Listesi";
  products: Product[] = [
    { id: 1, name: "Laptop 1", price: 2500, categoryId: 1, description: "desc 1",imageUrl: "../assets/images/products/picture1.jpg"},
    { id: 2, name: "Laptop 2", price: 2500, categoryId: 2, description: "desc 2",imageUrl: "../assets/images/products/picture2.jpg"},
    { id: 3, name: "Laptop 3", price: 2500, categoryId: 3, description: "desc 3",imageUrl: "../assets/images/products/picture1.jpg" },
    { id: 1, name: "Laptop 1", price: 2500, categoryId: 1, description: "desc 1",imageUrl: "../assets/images/products/picture2.jpg"},
    { id: 2, name: "Laptop 2", price: 2500, categoryId: 2, description: "desc 2",imageUrl: "../assets/images/products/picture1.jpg" },
    { id: 3, name: "Laptop 3", price: 2500, categoryId: 3, description: "desc 3",imageUrl: "../assets/images/products/picture2.jpg" }
  ];

  ngOnInit(): void {
  }

}
