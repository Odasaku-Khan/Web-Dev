// import { Component, OnInit } from '@angular/core';
// import { ApiService, Product } from '../api.service';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ProductItemComponent } from '../product-item/product-item.component'; // Import ProductItemComponent

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, ProductItemComponent], // Add ProductItemComponent to imports
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css'],
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];
//   categoryId: number | null = null;

//   constructor(private apiService: ApiService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       this.categoryId = Number(params.get('id'));
//       if (this.categoryId) {
//         this.apiService
//           .getProductsByCategory(this.categoryId)
//           .subscribe((products) => {
//             this.products = products;
//           });
//       }
//     });
//   }
// }
// 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Product } from '../api.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoryId: number | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = Number(params.get('categoryId'));
      if (this.categoryId) {
        this.apiService
          .getProductsByCategory(this.categoryId)
          .subscribe((products) => {
            this.products = products;
          });
      }
    });
  }
}