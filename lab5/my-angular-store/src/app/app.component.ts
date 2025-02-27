import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      products: [
        { id: 1, name: 'Laptop', description: 'High performance laptop', imageUrls: ['laptop.jpg'], rating: 4.5, likes: 0 },
        { id: 2, name: 'Phone', description: 'Latest smartphone', imageUrls: ['phone.jpg'], rating: 4.7, likes: 0 },
        { id: 3, name: 'Headphones', description: 'Noise-canceling', imageUrls: ['headphones.jpg'], rating: 4.3, likes: 0 },
        { id: 4, name: 'Smartwatch', description: 'Fitness tracking', imageUrls: ['watch.jpg'], rating: 4.2, likes: 0 },
        { id: 5, name: 'Camera', description: 'DSLR Camera', imageUrls: ['camera.jpg'], rating: 4.6, likes: 0 }
      ]
    },
    {
      id: 2,
      name: 'Clothing',
      products: [
        { id: 6, name: 'T-shirt', description: 'Cotton T-shirt', imageUrls: ['tshirt.jpg'], rating: 4.5, likes: 0 },
        { id: 7, name: 'Jeans', description: 'Denim jeans', imageUrls: ['jeans.jpg'], rating: 4.7, likes: 0 },
        { id: 8, name: 'Jacket', description: 'Winter jacket', imageUrls: ['jacket.jpg'], rating: 4.3, likes: 0 },
        { id: 9, name: 'Shoes', description: 'Running shoes', imageUrls: ['shoes.jpg'], rating: 4.2, likes: 0 },
        { id: 10, name: 'Hat', description: 'Stylish hat', imageUrls: ['hat.jpg'], rating: 4.6, likes: 0 }
      ]
    },
    // Create 2 more categories following the same pattern...
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
