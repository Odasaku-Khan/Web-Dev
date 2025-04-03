import { Component, OnInit } from '@angular/core';
import { ApiService, Category } from '../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  showProducts(categoryId: number): void {
    this.router.navigate(['/categories', categoryId, 'products']);
  }
}