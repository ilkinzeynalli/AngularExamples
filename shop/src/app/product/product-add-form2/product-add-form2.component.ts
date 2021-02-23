import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css']
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  productAddForm!: FormGroup;

  ngOnInit(): void {
    this.productAddForm = this.formBuilder.group({
      name:['',Validators.required]
    })
  }

  add(){
  }
}
