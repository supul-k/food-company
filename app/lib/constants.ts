import { Product, NavItem } from '@/app/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Artisan Sourdough',
    price: 5.99,
    description: 'Handcrafted daily with organic flour',
    image: '/images/sourdough.jpg',
    category: 'pasta',
    featured: true,
    ingredients: ['Organic flour', 'Water', 'Salt', 'Wild yeast'],
  },
  {
    id: '2',
    name: 'Organic Pasta',
    price: 4.99,
    description: 'Durum wheat semolina pasta',
    image: '/images/pasta.jpg',
    category: 'pasta',
    featured: true,
    ingredients: ['Durum wheat', 'Water'],
  },
  {
    id: '3',
    name: 'Tomato Basil Sauce',
    price: 6.99,
    description: 'Family recipe since 1985',
    image: '/images/sauce.jpg',
    category: 'sauce',
    featured: true,
    ingredients: ['San Marzano tomatoes', 'Fresh basil', 'Garlic', 'Olive oil'],
  },
  {
    id: '4',
    name: 'Extra Virgin Olive Oil',
    price: 12.99,
    description: 'Cold-pressed Italian olives',
    image: '/images/olive-oil.jpg',
    category: 'oil',
    featured: false,
    ingredients: ['100% Italian olives'],
    nutritionalInfo: {
      calories: 120,
      protein: 0,
      carbs: 0,
      fat: 14,
    },
  },
];

export const COMPANY_INFO = {
  name: 'Italian Delights',
  founded: 1985,
  email: 'hello@italiandelights.com',
  phone: '+1 (555) 123-4567',
  address: '123 Food Street, New York, NY 10001',
  social: {
    instagram: 'https://instagram.com/italiandelights',
    facebook: 'https://facebook.com/italiandelights',
    twitter: 'https://twitter.com/italiandelights',
  },
};