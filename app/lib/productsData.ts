export interface Product {
  id: number;
  name: string;
  slug: string;  // Add slug for URL
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number; // For discount display
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[]; // Multiple images for gallery
  popularity: number;
  inStock: boolean;
  isPopular?: boolean;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    calcium?: number;
  };
  ingredients?: string[];
  weight?: string;
  servings?: number;
  storageInstructions?: string;
  brand?: string;
}

export const categories = [
  { name: 'Drinking Yoghurt', slug: 'drinking-yoghurt', count: 8, icon: '🥤' },
  { name: 'Fresh Milk', slug: 'fresh-milk', count: 2, icon: '🥛' },
  { name: 'Ice Lollies', slug: 'ice-lollies', count: 1, icon: '🍦' },
  { name: 'Set Kiri', slug: 'set-kiri', count: 6, icon: '🍮' },
  { name: 'Soft Drink', slug: 'soft-drink', count: 3, icon: '🧃' },
  { name: 'Yoghurt', slug: 'yoghurt', count: 6, icon: '🥣' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Alovera Yoghurt',
    slug: 'alovera-yoghurt',
    category: 'Yoghurt',
    price: 85,
    description: 'Creamy yoghurt with real aloe vera pieces',
    fullDescription: `Our Alovera Yoghurt combines the creamy goodness of traditional yoghurt with the natural benefits of aloe vera. Made with fresh milk and real aloe vera pieces, this unique blend offers a refreshing taste while promoting digestive health.

Perfect for a healthy breakfast or as a midday snack, our Alovera Yoghurt is free from artificial preservatives and contains no added colors. The natural gel from aloe vera adds a subtle, refreshing taste that complements the creamy yoghurt perfectly.

Each cup is packed with probiotics that support gut health, while aloe vera provides additional digestive benefits. It's the perfect choice for health-conscious consumers looking for a delicious and nutritious snack.`,
    image: '/products/alovera-yoghurt.jpg',
    images: [
      '/products/alovera-yoghurt.jpg',
      '/products/alovera-yoghurt-2.jpg',
      '/products/alovera-yoghurt-3.jpg',
    ],
    popularity: 85,
    inStock: true,
    nutritionalInfo: {
      calories: 120,
      protein: 4.5,
      carbs: 18,
      fat: 3.5,
      calcium: 150,
    },
    ingredients: ['Pasteurized Milk', 'Sugar', 'Aloe Vera Gel', 'Live Yogurt Cultures', 'Stabilizers'],
    weight: '80g',
    servings: 1,
    storageInstructions: 'Keep refrigerated at 4°C. Consume within 3 days of opening.',
  },
  {
    id: 2,
    name: 'Drinking Yoghurt (Soursop Flavoured + Alovera)',
    slug: 'soursop-drinking-yoghurt',
    category: 'Drinking Yoghurt',
    price: 65,
    description: 'Refreshing soursop flavour with aloe vera',
    fullDescription: `Experience the tropical delight of our Soursop Drinking Yoghurt. This refreshing beverage combines the unique, sweet-tangy flavor of soursop (graviola) with the creamy texture of drinking yoghurt and the health benefits of aloe vera.

Perfect for on-the-go refreshment, this drink is packed with probiotics and vitamins. The soursop fruit is known for its distinctive flavor profile that reminds many of a combination of strawberry, pineapple, and citrus notes.

Whether you need a quick breakfast boost or a midday energy lift, our Soursop Drinking Yoghurt is the perfect choice. It's naturally rich in Vitamin C and antioxidants, making it both delicious and nutritious.`,
    image: '/products/soursop-drink.jpg',
    popularity: 78,
    inStock: true,
    nutritionalInfo: {
      calories: 95,
      protein: 3.2,
      carbs: 16,
      fat: 2.1,
    },
    ingredients: ['Pasteurized Milk', 'Soursop Puree', 'Sugar', 'Aloe Vera', 'Live Cultures'],
    weight: '200ml',
    servings: 1,
  },
  {
    id: 3,
    name: 'Drinking Yoghurt Cup (Mango)',
    slug: 'mango-drinking-yoghurt-cup',
    category: 'Drinking Yoghurt',
    price: 60,
    description: 'Rich mango flavoured drinking yoghurt',
    fullDescription: `Indulge in the tropical sweetness of our Mango Drinking Yoghurt Cup. Made with real mango puree and fresh milk, this creamy beverage captures the essence of ripe, sun-kissed mangoes.

Each sip delivers a perfect balance of sweet mango flavor and smooth yoghurt texture. It's an excellent source of protein and calcium, making it a healthy choice for both children and adults.

Perfect for lunchboxes, after-school snacks, or a quick breakfast on busy mornings. Our Mango Drinking Yoghurt contains no artificial colors or flavors - just pure, natural goodness.`,
    image: '/products/mango-cup.jpg',
    popularity: 92,
    inStock: true,
    isPopular: true,
    nutritionalInfo: {
      calories: 110,
      protein: 3.5,
      carbs: 19,
      fat: 2.5,
      calcium: 120,
    },
    ingredients: ['Pasteurized Milk', 'Mango Puree', 'Sugar', 'Live Cultures', 'Natural Flavors'],
    weight: '150ml',
    servings: 1,
  },
  {
    id: 4,
    name: 'Drinking Yoghurt Cup (Strawberry)',
    slug: 'strawberry-drinking-yoghurt-cup',
    category: 'Drinking Yoghurt',
    price: 60,
    description: 'Sweet strawberry flavoured drinking yoghurt',
    fullDescription: `Our Strawberry Drinking Yoghurt Cup is a classic favorite that never goes out of style. Made with real strawberry puree and fresh milk, this delightful beverage brings the taste of freshly picked strawberries to your everyday routine.

The smooth, creamy texture combined with the sweet-tart flavor of strawberries makes this an irresistible treat for all ages. Packed with protein, calcium, and live probiotics, it's as nutritious as it is delicious.

Enjoy it as a breakfast drink, post-workout refreshment, or a guilt-free dessert alternative.`,
    image: '/products/strawberry-cup.jpg',
    popularity: 88,
    inStock: true,
    nutritionalInfo: {
      calories: 108,
      protein: 3.4,
      carbs: 18.5,
      fat: 2.4,
    },
    ingredients: ['Pasteurized Milk', 'Strawberry Puree', 'Sugar', 'Live Cultures', 'Natural Flavors'],
    weight: '150ml',
    servings: 1,
  },
  {
    id: 5,
    name: 'Drinking Yoghurt Cup (Vanilla)',
    slug: 'vanilla-drinking-yoghurt-cup',
    category: 'Drinking Yoghurt',
    price: 60,
    description: 'Classic vanilla drinking yoghurt',
    fullDescription: `Simple, elegant, and delicious - our Vanilla Drinking Yoghurt Cup is a timeless classic. Made with real vanilla extract and fresh milk, this smooth and creamy beverage offers a comforting flavor that everyone loves.

The subtle sweetness of vanilla complements the natural tang of yoghurt perfectly. It's an excellent source of protein and calcium, making it a healthy choice for any time of day.

Perfect on its own, or use it as a base for smoothies and milkshakes. Our Vanilla Drinking Yoghurt contains no artificial colors or preservatives.`,
    image: '/products/vanilla-cup.jpg',
    popularity: 85,
    inStock: true,
    nutritionalInfo: {
      calories: 105,
      protein: 3.3,
      carbs: 18,
      fat: 2.3,
    },
    ingredients: ['Pasteurized Milk', 'Sugar', 'Vanilla Extract', 'Live Cultures', 'Natural Flavors'],
    weight: '150ml',
    servings: 1,
  },
  {
    id: 6,
    name: 'Fresh Milk 1000 ML',
    slug: 'fresh-milk-1000ml',
    category: 'Fresh Milk',
    price: 220,
    description: 'Pure pasteurized fresh milk',
    fullDescription: `Our Fresh Milk is the gold standard of dairy excellence. Sourced from local farms and processed within hours of collection, this milk retains all the natural goodness and fresh taste that families have trusted for generations.

We use state-of-the-art pasteurization technology to ensure safety while preserving the natural flavor and nutritional value. Our milk is homogenized for a smooth, consistent texture and rich, creamy taste.

Perfect for drinking, cooking, baking, or adding to tea and coffee. Available in convenient 1000ml packaging.`,
    image: '/products/fresh-milk-1l.jpg',
    popularity: 95,
    inStock: true,
    isPopular: true,
    nutritionalInfo: {
      calories: 150,
      protein: 8,
      carbs: 12,
      fat: 8,
      calcium: 300,
    },
    ingredients: ['100% Fresh Cow Milk'],
    weight: '1000ml',
    servings: 4,
    storageInstructions: 'Keep refrigerated at 4°C. Consume within 3-4 days of opening.',
  },
  {
    id: 7,
    name: 'Fresh Milk Packet 1000 ml',
    slug: 'fresh-milk-packet-1000ml',
    category: 'Fresh Milk',
    price: 215,
    description: 'Convenient pack of fresh milk',
    fullDescription: `Our convenient Fresh Milk Packet offers the same great quality as our bottled milk in a more economical and space-saving package. Perfect for families and bulk buyers.

The flexible packaging reduces storage space and is easier to dispose of responsibly. The milk inside is identical to our bottled version - pure, pasteurized, and delicious.

Ideal for daily consumption, cooking, and preparing dairy-based dishes.`,
    image: '/products/fresh-milk-packet.jpg',
    popularity: 90,
    inStock: true,
    nutritionalInfo: {
      calories: 150,
      protein: 8,
      carbs: 12,
      fat: 8,
      calcium: 300,
    },
    ingredients: ['100% Fresh Cow Milk'],
    weight: '1000ml',
    servings: 4,
  },
  {
    id: 9,
    name: 'Kithulpeni + Yoghurt 80g',
    slug: 'kithulpeni-yoghurt',
    category: 'Yoghurt',
    price: 95,
    description: 'Traditional kithul treacle with yoghurt',
    fullDescription: `Experience the authentic taste of Sri Lanka with our Kithulpeni + Yoghurt. This unique combination pairs our creamy, thick yoghurt with traditional kithul treacle - a natural sweetener tapped from the flowers of the Kithul palm.

The rich, caramel-like flavor of kithul treacle complements the tangy yoghurt perfectly, creating a dessert that's both traditional and indulgent. It's a taste of Sri Lankan heritage in every spoonful.

Perfect as a dessert, special treat, or a healthy alternative to sugary snacks. Contains no artificial sweeteners or preservatives.`,
    image: '/products/kithulpeni-yoghurt.jpg',
    popularity: 98,
    inStock: true,
    isPopular: true,
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbs: 28,
      fat: 5,
    },
    ingredients: ['Pasteurized Milk', 'Kithul Treacle', 'Live Yogurt Cultures'],
    weight: '80g',
    servings: 1,
  },
  {
    id: 16,
    name: 'Rich Vanilla Flavoured Drinking Yoghurt',
    slug: 'rich-vanilla-drinking-yoghurt',
    category: 'Drinking Yoghurt',
    price: 70,
    description: 'Premium vanilla drinking yoghurt',
    fullDescription: `Our Rich Vanilla Flavoured Drinking Yoghurt is the premium choice for vanilla lovers. Made with real vanilla beans and extra creamy milk, this indulgent beverage offers a richer, more sophisticated vanilla experience.

The smooth, velvety texture and intense vanilla flavor make this a truly satisfying drink. It's perfect for those moments when you want something a little more special than your everyday yoghurt drink.

Enjoy it chilled as a luxurious treat, or use it to create gourmet smoothies and desserts.`,
    image: '/products/vanilla-drink.jpg',
    popularity: 89,
    inStock: true,
    isPopular: true,
    nutritionalInfo: {
      calories: 125,
      protein: 3.8,
      carbs: 19,
      fat: 3.2,
    },
    ingredients: ['Pasteurized Milk', 'Sugar', 'Vanilla Bean Extract', 'Cream', 'Live Cultures'],
    weight: '200ml',
    servings: 1,
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

// Helper function to get related products
export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}