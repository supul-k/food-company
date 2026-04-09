export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'pasta' | 'sauce' | 'oil' | 'cheese';
  featured: boolean;
  ingredients: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}