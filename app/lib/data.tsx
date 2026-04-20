// ============================================
// CAROUSEL SLIDES
// ============================================
export const carouselSlides = [
  {
    id: 1,
    image: '/slides/slide1.png',
    title: 'Traditional Herbal Goodness',
    subtitle: 'Time‑honoured Sri Lankan recipes in instant form',
  },
  {
    id: 2,
    image: '/slides/slide2.png',
    title: 'Naturally Nourishing',
    subtitle: 'No artificial colours, no preservatives – just pure ingredients',
  },
  {
    id: 3,
    image: '/slides/slide3.png',
    title: 'Wellness from the Wild',
    subtitle: 'Discover our range of herbal teas, porridges & fruit chips',
  },
];

// ============================================
// PRODUCT CATEGORIES (matching your list)
// ============================================
export const productCategories = [
  { name: 'Instant Porridge', slug: 'instant-porridge', count: 6, icon: '/categories/porrige.png' },
  { name: 'Herbals Tea Bag', slug: 'herbals-tea-bag', count: 13, icon: '/categories/tea-bag.png' },
  { name: 'Roots & Yums', slug: 'roots-yums', count: 0, icon: '/categories/roots.png' },
  { name: 'Fruits Powder & Chips', slug: 'fruits-powder-chips', count: 6, icon: '/categories/chips.png' },
  { name: 'Instant Curry', slug: 'instant-curry', count: 4, icon: '/categories/curry.png' },
  { name: 'Pepo', slug: 'pepo', count: 6, icon: '/categories/porrige.png' },
];

// Category metadata for banners (updated to match your categories)
export const categoryMetadata: Record<string, {
  bannerImage: string | null;
  coverImage: string | null;
  description: string;
  bgGradient: string;
  icon?: string;
}> = {
  'Instant Porridge': {
    bannerImage: '/products/category-banners/instant-porridge.png',
    coverImage: '/products/category-banners/instant-porridge.png',
    description: 'Nutritious and convenient instant porridges made from traditional grains, perfect for a healthy breakfast.',
    bgGradient: 'from-amber-200 to-orange-300',
    icon: '/categories/porrige.png',
  },
  'Herbals Tea Bag': {
    bannerImage: '/products/category-banners/herbal-tea.png',
    coverImage: '/products/category-banners/herbal-tea.png',
    description: 'Wellness-focused herbal tea blends crafted from natural herbs, flowers, and roots for health and relaxation.',
    bgGradient: 'from-green-600 to-emerald-600',
    icon: '/categories/tea-bag.png',
  },
  'Roots & Yums': {
    bannerImage: '/products/category-banners/roots-yums.png',
    coverImage: '/products/category-banners/roots-yums.png',
    description: 'Delicious and nutritious snacks made from natural roots and tubers, harvested from fertile lands.',
    bgGradient: 'from-amber-600 to-brown-600',
    icon: '/categories/roots.png',
  },
  'Fruits Powder & Chips': {
    bannerImage: '/products/category-banners/fruit-powder.png',
    coverImage: '/products/category-banners/fruit-powder.png',
    description: 'Natural fruit powders and crispy chips made from real fruits, preserving authentic flavors and nutrients.',
    bgGradient: 'from-red-500 to-pink-500',
    icon: '/categories/chips.png'
  },
  'Instant Curry': {
    bannerImage: '/products/category-banners/instant-curry.png',
    coverImage: '/products/category-banners/instant-curry.png',
    description: 'Quick and easy instant curry mixes packed with authentic Sri Lankan spices and flavors.',
    bgGradient: 'from-red-600 to-orange-600',
    icon: '/categories/curry.png'
  },
  'Pepo': {
    bannerImage: '/products/category-banners/pepo.png',
    coverImage: '/products/category-banners/pepo.png',
    description: 'Innovative value-added pumpkin products, from soup mixes to healthy snacks, made from surplus harvest.',
    bgGradient: 'from-orange-500 to-yellow-600',
    icon: '/categories/porrige.png',
  },
};

// Helper function to get category metadata
export function getCategoryMetadata(categoryName: string) {
  return categoryMetadata[categoryName] || {
    bannerImage: null,
    coverImage: null,
    description: `Explore our ${categoryName} collection of natural and nutritious products.`,
    bgGradient: 'from-brand-yellow to-brand-green',
    icon: '📦',
  };
}

// ============================================
// BENEFITS (adapted to Sustenance Lanka)
// ============================================
export const benefits = [
  {
    title: '100% Natural Ingredients',
    description: 'We use only real herbs, fruits, and grains – no artificial flavours or preservatives.',
    icon: '🌿',
  },
  {
    title: 'Traditional Wisdom',
    description: 'Each recipe is rooted in Sri Lankan Ayurveda and passed‑down family knowledge.',
    icon: '📜',
  },
  {
    title: 'Instant Convenience',
    description: 'Enjoy authentic village‑style porridges and curries in just minutes.',
    icon: '⏱️',
  },
  {
    title: 'Rich in Antioxidants',
    description: 'Our herbal teas and fruit powders are packed with natural disease‑fighting compounds.',
    icon: '🍵',
  },
  {
    title: 'Dietary Friendly',
    description: 'Many products are vegan, gluten‑free, and diabetic‑friendly – labelled clearly.',
    icon: '✅',
  },
  {
    title: 'Supporting Local Farmers',
    description: 'We source from small‑scale growers across Sri Lanka, paying fair prices.',
    icon: '🤝',
  },
];

// ============================================
// STATS (brand pillars / taglines)
// ============================================
export const stats = [
  { label: 'Heritage', value: 'Since 2015' },
  { label: 'Products', value: '35+' },
  { label: 'Herbs Used', value: '25+' },
  { label: 'Farmers Supported', value: '200+' },
  { label: 'Preservative Free', value: '100%' },
  { label: 'Customer Rating', value: '4.8 ★' },
];

// ============================================
// TESTIMONIALS (realistic for herbal/natural products)
// ============================================
export const testimonials = [
  {
    id: 1,
    text: 'The Welpenala porridge is my go‑to breakfast now. It keeps me full for hours and I love knowing it’s good for my digestion. No more sugary cereals!',
    author: 'Dilini Perera, Colombo',
  },
  {
    id: 2,
    text: 'I was sceptical about instant curry, but Kiri Kos tastes exactly like my grandmother used to make. The convenience is a lifesaver on busy weekdays.',
    author: 'Rohan Abeysinghe, Kandy',
  },
  {
    id: 3,
    text: 'My family drinks Ranawara tea every evening. It has helped regulate my husband’s blood sugar levels. Thank you Sustenance Lanka for bringing back these traditional remedies.',
    author: 'Kamala Jayasuriya, Galle',
  },
];

// ============================================
// NEWS & EVENTS (blog‑style articles)
// ============================================
export const newsEvents = [
  {
    id: 1,
    date: '05',
    month: 'Apr',
    title: 'Reviving Lost Grains: How Sustenance Lanka is Bringing Back Traditional Porridges',
    excerpt:
      'Before instant noodles, Sri Lankans started their day with nourishing herbal porridges. We spoke to the founders about their mission to reintroduce Welpenala, Polpala and Iramusu to modern kitchens…',
    author: 'sustenance.lanka',
  },
  {
    id: 2,
    date: '28',
    month: 'Mar',
    title: 'Why Your Tea Bag Should Be More Than Just Flavour – A Look at Our Herbal Range',
    excerpt:
      'From Beli mal to Veniwelgeta, each herbal tea is crafted for a specific wellness purpose. Learn how to choose the right tea for digestion, immunity or sleep…',
    author: 'sustenance.lanka',
  },
  {
    id: 3,
    date: '15',
    month: 'Mar',
    title: 'Behind the Snack: Making Our Pepo Pumpkin Soup Mix',
    excerpt:
      'We take you inside our small‑batch production where real pumpkins are dried and milled to create the creamiest instant soup – no MSG, no fillers.',
    author: 'sustenance.lanka',
  },
  {
    id: 4,
    date: '01',
    month: 'Mar',
    title: 'Partnering with Farmers: The Roots of Sustenance Lanka',
    excerpt:
      'Our out‑grower programme ensures that every leaf of polpala and every nelli fruit is traceable and fairly purchased. Meet some of the families we work with…',
    author: 'sustenance.lanka',
  },
];