import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product | null = null;
  @Output() edit = new EventEmitter<Product>();

}
