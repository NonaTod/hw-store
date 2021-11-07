import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() product: Product | null = null;
  @Output() edit = new EventEmitter<Product>();
}
