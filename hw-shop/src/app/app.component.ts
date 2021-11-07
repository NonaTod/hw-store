import { Component } from '@angular/core';
import { async, Observable } from 'rxjs';
import { Product } from './components/product/product.model';
import { RestService } from './service/rest.service';
import { Cart } from './components/cart/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'hw-shop';
  prodsObs!: Observable<Product[]>;
  products: Product[] = [];
  carts: Cart[] = [];
  constructor(private restService: RestService) {
    restService.getProducts().subscribe((v) => this.products = v);
  }
  getProds(): Product[]{
    return this.products;
  }

  getFilterText(filter : string) {
    this.restService.getFilteredProducts(filter).subscribe((v) => this.products = v);
  }

  getCart(): Product[]{
    this.restService.getCart().subscribe((v) => this.carts = v);
    let index = 0;
    this.carts.forEach( (element) => {
      let prod = element.products[index];
      this.restService.getProductById(prod.id).subscribe((v) => this.products = v);
      index++;
  });
  return this.products;
  }
  
}
