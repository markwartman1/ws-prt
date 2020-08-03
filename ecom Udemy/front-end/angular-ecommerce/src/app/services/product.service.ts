import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';
  
  constructor(private http: HttpClient) { }
  
  // getProductList(): Observable<Product[]> {
    //   return this.http.get<Product[]>(this.baseUrl);
    // }
    
    getProductList(theCategoryId: number): Observable<Product[]> {
      
      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
      
      return this.http.get<GetResponseProducts>(searchUrl).pipe(
        map(response => response._embedded.products)
        );
      }

      getProductCategories(): Observable<ProductCategory[]> {
        return this.http.get<GetResponseProductCategory>(this.categoryUrl).pipe(
          map(response => response._embedded.productCategory)
          );
      }

      searchProducts(theKeyword: string): Observable<Product[]> {

        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
      
        return this.http.get<GetResponseProducts>(searchUrl).pipe(
          map(response => response._embedded.products)
          );      
      }

    }
    
    interface GetResponseProducts {
      _embedded: {
        products: Product[];
      }
    }

    interface GetResponseProductCategory {
      _embedded: {
        productCategory: ProductCategory[];
      }
    }
    