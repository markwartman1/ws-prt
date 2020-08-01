import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  // getProductList(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.baseUrl);
  // }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
