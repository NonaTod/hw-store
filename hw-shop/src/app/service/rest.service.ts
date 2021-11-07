import { HttpClient } from '@angular/common/http';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Product } from '../components/product/product.model';
import { User } from '../components/user/user.model';
import { Cart } from '../components/cart/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  productsUrl: string  = 'http://localhost:8080/products';
  productsFilteredUrl: string  = 'http://localhost:8080/products?q=';
  cartsUrl: string = "http://localhost:8080/carts/1";
     // usersUrl: "http://localhost:8080/users";

  constructor(private http: HttpClient) {}
    
    getProducts(): Observable<Product[]>
    {
      return this.http.get<Product[]>(this.productsUrl + "?_page=1&_limit=4");
    }

    getFilteredProducts(filter?: string): Observable<Product[]>
    {
      return this.http.get<Product[]>(this.productsFilteredUrl + filter);
    }

    getProductById(id?: number): Observable<Product[]>
    {
      return this.http.get<Product[]>(this.productsUrl + id);
    }
   
    getCart()
    {
      return this.http.get<Cart[]>(this.cartsUrl);
    }

     // getUsers()
    // {
    //   return this.http.get<User[]>(this.usersUrl);
    // }
  
}
