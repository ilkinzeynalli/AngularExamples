import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import{tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  path:string = "http://localhost:3000/products";

  getProducts(categoryId: number) : Observable<Product[]>{
    let newPath = this.path;

    if(categoryId)
      newPath += "?categoryId=" + categoryId;
      
    return this.httpClient.get<Product[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = '';

    if(err.error instanceof ErrorEvent){
        errorMessage += "Error bas verdi:" + err.error.message;
    }  
    else{
      errorMessage += 'Sistemsel hata bas verdi';
    }

    return throwError(errorMessage);
  }
}
