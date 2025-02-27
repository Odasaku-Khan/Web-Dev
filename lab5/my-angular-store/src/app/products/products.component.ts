import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[]=[
    {
      name: 'iPhone 15 Pro Max',
      description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },
    {
      name: 'Пылесос Samsung',
      description: 'Пылесос Samsung VCC4520S36/XEV синий',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/haf/63761734205470.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000'
    },
    
    {
      name: 'Samsung Galaxy A06',
      description: 'Смартфон Samsung Galaxy A06 6 ГБ/128 ГБ черный',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h00/87088029925406.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/hca/87088030056478.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/hf2/87088035299358.jpg?format=gallery-small'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000'
    },
    {
      name:'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-large'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      name:'Стиральная машина Samsung WW60AG4S00CELD белый',
      description: 'Стиральная машина Samsung WW60AG4S00CELD белый',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h11/82896148693022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h7d/82896151314462.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h7d/82896151314462.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      name:'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
      description: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h6a/84434711904286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      name:'Зарядное устройство Samsung EP-TA800NBEGRU черный',
      description: 'Зарядное устройство Samsung EP-TA800NBEGRU черный',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h55/64124143173662.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h44/64124144877598.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/hc5/83706613399582.jpg?format=gallery-small',
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      name:'Холодильник Samsung RB31FERNDSA серебристый',
      description: 'Холодильник Samsung RB31FERNDSA серебристый',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h87/85529393266718.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/ha4/85529393332254.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/hc9/85529393463326.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      name:'Фильтр Samsung DJ97-01040C',
      description: 'Фильтр Samsung DJ97-01040C',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/h83/hf5/64294929235998.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fil-tr-samsung-dj97-01040c-103680161/?c=750000000',
    },
    {
      name:'Пульт ДУ Samsung UNIVERSAL RM-L1088 LCD',
      description: 'Пульт ДУ Samsung UNIVERSAL RM-L1088 LCD',
      imageUrls:[
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc1/64327376207902.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hcf/64327379025950.jpg?format=gallery-small'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-universal-rm-l1088-lcd-102972600/?c=750000000',
    }
    
  ];
  shareOnWhatsapp(product: Product) {
    window.open(`https://wa.me/?text=${encodeURIComponent(product.link)}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}`, '_blank');
  }
}
