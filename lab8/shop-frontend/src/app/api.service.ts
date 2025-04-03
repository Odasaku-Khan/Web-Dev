import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number; // Assuming category ID
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/'; // Base API URL

  constructor(private http: HttpClient) {} // Inject HttpClient

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}categories/`);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`<span class="math-inline">\{this\.apiUrl\}products/</span>{productId}/`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`<span class="math-inline">\{this\.apiUrl\}categories/</span>{categoryId}/products/`);
  }
}