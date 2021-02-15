import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  title: string = "Categori Listesi";
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

}
