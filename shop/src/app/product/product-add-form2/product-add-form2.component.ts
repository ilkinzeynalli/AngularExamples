import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductAddForm2Component implements OnInit{
  product!: Product;
  productAddForm!: FormGroup;
  categories!: Category[];
  constructor(private formBuilder: FormBuilder,
           private categoryService: CategoryService,
           private productService: ProductService,
           private alertifyService: AlertifyService) { }

  createForm() {
    this.productAddForm = new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(3)]),
      price:new FormControl("",Validators.required),
      categoryId:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required),
      imageUrl:new FormControl("",Validators.required),
    });

    // this.productAddForm = this.formBuilder.group({
    //   name:["",[Validators.required,Validators.minLength(3)]],
    //   price:["",Validators.required],
    //   categoryId:["",Validators.required],
    //   description:["",Validators.required],
    //   imageUrl: ["",Validators.required]
    // });

  }

  ngOnInit(): void {
    this.createForm();

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  
  add() {
      this.product = Object.assign({},this.productAddForm.value);

      this.productService.addProduct(this.product).subscribe(data=>{
        this.alertifyService.success(this.product.name + " elave edildi");
        this.productAddForm.reset();
      })
   }
}
