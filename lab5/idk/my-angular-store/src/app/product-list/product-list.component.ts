import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() product!: Product;
}
