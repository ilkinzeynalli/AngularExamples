import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Category } from './category';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  path:string = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage += "Hata bas verdi: " + err.error.message;
    }
    else{
      errorMessage += 'Sistemsel hata bas verdi';
    }
    
    return throwError(errorMessage);
  }
}
