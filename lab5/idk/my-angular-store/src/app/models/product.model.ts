import { Category } from "./category.model";
export interface Product {
    id:number;
    name: string;
    description: string;
    imageUrls: string[];
    rating: number;
    link: string;
    like: number;
    price: number;
    category_id: number
  }
  