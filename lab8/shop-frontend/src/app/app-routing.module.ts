import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id/products', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }