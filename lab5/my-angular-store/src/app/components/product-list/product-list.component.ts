import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  // Handle removal of a product from the list
  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
