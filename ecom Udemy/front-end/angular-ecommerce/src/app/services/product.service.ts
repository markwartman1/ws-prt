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

    getProduct(theProductId: number): Observable<Product> {
      
      const productUrl = `${this.baseUrl}/${theProductId}`;
      return this.http.get<Product>(productUrl);
    }
  
  // getProductList(): Observable<Product[]> {
    //   return this.http.get<Product[]>(this.baseUrl);
    // }

    getProductListPaginate( thePage: number, 
                            thePageSize: number, 
                            theCategoryId: number): Observable<GetResponseProducts> {
      
      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                      + `&page=${thePage}&size=${thePageSize}`;
      
      return this.http.get<GetResponseProducts>(searchUrl);
    }
    
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

      searchProductsPaginate( thePage: number, 
                              thePageSize: number, 
                              theKeyword: string): Observable<GetResponseProducts> {

        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
          + `&page=${thePage}&size=${thePageSize}`;

        return this.http.get<GetResponseProducts>(searchUrl);
      }

    }
    
    interface GetResponseProducts {
      _embedded: {
        products: Product[];
      },
      page: {
        size: number,
        totalEmements: number,
        totalPages: number,
        number: number
      }
    }

    interface GetResponseProductCategory {
      _embedded: {
        productCategory: ProductCategory[];
      }
    }
    