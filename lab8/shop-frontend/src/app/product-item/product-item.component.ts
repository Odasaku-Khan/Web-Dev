import { Component, Input, OnInit } from '@angular/core';
import { Product, ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService, public router: Router) {} //make router public

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      if (productId && !this.product) {
        this.apiService.getProduct(productId).subscribe((product) => {
          this.product = product;
        });
      }
    });
  }

  likeProduct(): void {
    if (this.product) {
      console.log('Liked product:', this.product.id);
    }
  }

  removeProduct(): void {
    if (this.product) {
      console.log('Removed product:', this.product.id);
    }
  }

  shareProduct(): void {
    if (this.product) {
      const shareUrl = `http://your-app-url/products/${this.product.id}`;
      const message = `Check out this product: ${this.product.name} - ${shareUrl}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      const telegramUrl = `https://t.me/share/url?url=<span class="math-inline">\{encodeURIComponent\(shareUrl\)\}&text\=</span>{encodeURIComponent(this.product.name)}`;
      window.open(whatsappUrl, '_blank');
    }
  }
}