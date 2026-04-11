export interface NewsArticle {
  id: number;
  slug: string;
  date: string;
  month: string;
  year: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  image: string;
  category: string;
  readTime: number;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: 'reviving-lost-grains-traditional-porridges',
    date: '05',
    month: 'Apr',
    year: 2024,
    title: 'Reviving Lost Grains: How Sustenance Lanka is Bringing Back Traditional Porridges',
    excerpt: 'Before instant noodles, Sri Lankans started their day with nourishing herbal porridges. We spoke to the founders about their mission to reintroduce Welpenala, Polpala and Iramusu to modern kitchens…',
    content: `
      <p>Before instant noodles and processed breakfast cereals, Sri Lankan households began their day with a bowl of warm, nourishing herbal porridge. These traditional concoctions, made from wild greens and grains, were not just food – they were medicine, passed down through generations.</p>
      
      <p>Today, Sustenance Lanka is on a mission to bring back these lost culinary treasures. We spoke to the founders about their journey to reintroduce Welpenala, Polpala, Iramusu, and other traditional ingredients to modern kitchens.</p>
      
      <h2>The Forgotten Wisdom</h2>
      
      <p>"Our grandmothers knew something that modern nutrition science is only now catching up to," says founder Amal Perera. "These wild greens are packed with antioxidants, vitamins, and minerals that you can't find in ordinary vegetables."</p>
      
      <p>Welpenala (water spinach) is known for its iron content and cooling properties. Polpala (Indian pennywort) is celebrated for its cognitive benefits. Iramusu (Indian sarsaparilla) has been used for centuries as a blood purifier and immune booster.</p>
      
      <h2>From Wild to Table</h2>
      
      <p>The process begins with identifying and sustainably harvesting these wild greens from forests and home gardens across Sri Lanka. Local communities are trained in proper identification and harvesting techniques, ensuring both quality and conservation.</p>
      
      <p>Once harvested, the greens are carefully dried using low-temperature methods that preserve their nutritional content and active compounds. They're then milled into fine powders that can be easily incorporated into porridges, smoothies, and baked goods.</p>
      
      <h2>A Modern Solution</h2>
      
      <p>"We're not asking people to go back to grinding grains on a stone," explains co-founder Priyani Weerasinghe. "We've created convenient porridge mixes that capture the essence of tradition while fitting into busy modern lives."</p>
      
      <p>The result is a range of instant porridge mixes that take just minutes to prepare but deliver hours of sustained energy and nutrition. Each mix is free from preservatives, artificial colors, and added sugars – just pure, traditional goodness.</p>
      
      <h2>Community Impact</h2>
      
      <p>The revival of traditional grains has also created economic opportunities for rural communities. Over 200 families now supplement their income by harvesting and processing wild greens, with fair prices guaranteed through Sustenance Lanka's out-grower programme.</p>
      
      <p>"This isn't just about food," says Amal. "It's about preserving our heritage, supporting our farmers, and giving Sri Lankans a healthier start to their day."</p>
      
      <p>Try their Traditional Herbal Porridge Mix – available in original Welpenala, Polpala, and Iramusu varieties – and taste a piece of Sri Lankan history.</p>
    `,
    author: 'sustenance.lanka',
    authorImage: '/avatars/sustenance-lanka.jpg',
    image: '/news/traditional-porridge.jpg',
    category: 'Heritage',
    readTime: 5,
    tags: ['Traditional Food', 'Heritage', 'Health', 'Sustainability'],
  },
  {
    id: 2,
    slug: 'herbal-tea-range-wellness',
    date: '28',
    month: 'Mar',
    year: 2024,
    title: 'Why Your Tea Bag Should Be More Than Just Flavour – A Look at Our Herbal Range',
    excerpt: 'From Beli mal to Veniwelgeta, each herbal tea is crafted for a specific wellness purpose. Learn how to choose the right tea for digestion, immunity or sleep…',
    content: `
      <p>Tea is Sri Lanka's gift to the world, but for centuries, our ancestors understood that tea could be so much more than a morning pick-me-up. From Beli mal to Veniwelgeta, each herbal infusion was carefully chosen for its specific healing properties.</p>
      
      <h2>More Than Just a Hot Drink</h2>
      
      <p>"Every plant in our herbal tea range has been used in traditional medicine for generations," explains herbalist Dr. Nimal Jayasinghe. "We're not creating anything new – we're simply making ancient wisdom accessible in a tea bag."</p>
      
      <h2>Choose Your Wellness Goal</h2>
      
      <p><strong>For Digestion:</strong> Our Beli mal (Bael flower) tea has been used for centuries to soothe upset stomachs and improve digestion. The flowers contain compounds that reduce inflammation and promote healthy gut bacteria.</p>
      
      <p><strong>For Immunity:</strong> Veniwelgeta (Coscinium fenestratum) is a powerful immune booster with natural antibiotic properties. Combined with ginger and lemongrass, it's the perfect tea for cold and flu season.</p>
      
      <p><strong>For Sleep:</strong> Our Polpala (Indian pennywort) and Iramusu blend is designed to calm the nervous system and promote restful sleep. Unlike sleeping pills, it works with your body's natural rhythms.</p>
      
      <p><strong>For Energy:</strong> The Ranawara (Cassia auriculata) tea provides sustained energy without the crash of caffeine. It's rich in iron and antioxidants, making it perfect for an afternoon boost.</p>
      
      <h2>Quality You Can Taste</h2>
      
      <p>Each herb is harvested at its peak potency, then dried within hours to preserve its active compounds. Our tea bags are made from unbleached, biodegradable materials – because wellness shouldn't come at the environment's expense.</p>
      
      <p>Explore our full herbal tea range and find your perfect blend. Each box comes with brewing instructions and information about the traditional uses of each herb.</p>
    `,
    author: 'sustenance.lanka',
    authorImage: '/avatars/sustenance-lanka.jpg',
    image: '/news/herbal-tea.jpg',
    category: 'Wellness',
    readTime: 4,
    tags: ['Herbal Tea', 'Wellness', 'Natural Remedies', 'Ayurveda'],
  },
  {
    id: 3,
    slug: 'pepo-pumpkin-soup-mix',
    date: '15',
    month: 'Mar',
    year: 2024,
    title: 'Behind the Snack: Making Our Pepo Pumpkin Soup Mix',
    excerpt: 'We take you inside our small‑batch production where real pumpkins are dried and milled to create the creamiest instant soup – no MSG, no fillers.',
    content: `
      <p>Most instant soups are filled with MSG, artificial flavors, and mysterious "natural flavors" that are anything but natural. Our Pepo Pumpkin Soup Mix is different. It contains exactly three ingredients: pumpkin, coconut milk powder, and sea salt.</p>
      
      <h2>From Farm to Packet</h2>
      
      <p>The journey begins at small pumpkin farms across Sri Lanka's central province. We work exclusively with farmers who grow heirloom pumpkin varieties – the ones with deep orange flesh and intense natural sweetness.</p>
      
      <p>"These pumpkins are picked at the peak of ripeness," says production manager Kamal Silva. "That's when they have the highest sugar content and the creamiest texture."</p>
      
      <h2>The Drying Process</h2>
      
      <p>Unlike mass-produced soup mixes that use high-heat spray drying (which destroys nutrients and flavor), we use a low-temperature drying process that takes 24 hours. The result is a powder that tastes like fresh pumpkin, not cardboard.</p>
      
      <p>"You can actually see the difference," Kamal explains. "Our powder is a deep orange color – that's all the beta-carotene. Cheap powders are pale because the nutrients have been destroyed."</p>
      
      <h2>No Fillers, No Secrets</h2>
      
      <p>Open a packet of our soup mix and you'll see exactly what we promised: pumpkin powder, coconut milk powder, and sea salt. That's it. No maltodextrin, no hydrolyzed vegetable protein, no "yeast extract" (which is just MSG by another name).</p>
      
      <p>"We believe in complete transparency," says founder Amal Perera. "If you can't pronounce an ingredient, it shouldn't be in your food."</p>
      
      <h2>How to Enjoy</h2>
      
      <p>Simply add hot water and stir. For a heartier meal, add fresh herbs, a drizzle of coconut cream, or some roasted pumpkin seeds. The soup is vegan, gluten-free, and contains no added sugar.</p>
      
      <p>Try it once and you'll never go back to ordinary instant soup.</p>
    `,
    author: 'sustenance.lanka',
    authorImage: '/avatars/sustenance-lanka.jpg',
    image: '/news/pumpkin-soup.jpg',
    category: 'Behind the Scenes',
    readTime: 6,
    tags: ['Soup', 'Pumpkin', 'Production', 'Clean Eating'],
  },
  {
    id: 4,
    slug: 'partnering-with-farmers-out-grower-programme',
    date: '01',
    month: 'Mar',
    year: 2024,
    title: 'Partnering with Farmers: The Roots of Sustenance Lanka',
    excerpt: 'Our out‑grower programme ensures that every leaf of polpala and every nelli fruit is traceable and fairly purchased. Meet some of the families we work with…',
    content: `
      <p>When you buy a packet of Sustenance Lanka's herbal porridge or tea, you're not just buying a product – you're supporting a network of over 300 smallholder farmers across Sri Lanka. Our out-grower programme ensures that every leaf of polpala and every nelli fruit is traceable, sustainably harvested, and fairly purchased.</p>
      
      <h2>Meet the Farmers</h2>
      
      <p>In the village of Kumbukgeta, 62-year-old Kusuma Weerasinghe wakes before dawn to harvest polpala from her home garden. "I've been growing these greens for 40 years," she says, "but only now am I being paid fairly for them."</p>
      
      <p>Through our programme, Kusuma receives training in organic cultivation, access to high-quality seeds, and a guaranteed price that's 30% above market rates. "I can now afford to send my grandchildren to school," she smiles.</p>
      
      <h2>Traceability from Leaf to Packet</h2>
      
      <p>Every batch of herbs that enters our facility is tagged with the farmer's name, harvest date, and GPS coordinates of where it was grown. This allows us to ensure quality and provide complete transparency to our customers.</p>
      
      <p>"If a customer in Colombo has a question about a specific packet, we can tell them exactly which farmer grew those herbs," explains operations manager Thisuri Fernando. "That's how committed we are to transparency."</p>
      
      <h2>Beyond Fair Trade</h2>
      
      <p>Our programme goes beyond just paying fair prices. We provide:</p>
      
      <ul>
        <li>Free training in organic cultivation and post-harvest handling</li>
        <li>Access to micro-loans through our partnership with local banks</li>
        <li>Health insurance for farming families</li>
        <li>School supplies for farmers' children</li>
        <li>Regular health camps with free check-ups</li>
      </ul>
      
      <h2>The Impact So Far</h2>
      
      <p>Since launching our out-grower programme in 2020, we've seen remarkable results:</p>
      
      <ul>
        <li>Farmer incomes have increased by an average of 45%</li>
        <li>Over 100 acres of land are now under organic cultivation</li>
        <li>Three new farmer cooperatives have been formed</li>
        <li>Two community wells have been built in water-scarce areas</li>
      </ul>
      
      <h2>Join the Movement</h2>
      
      <p>Every purchase you make directly supports these farming families. When you choose Sustenance Lanka, you're choosing a food system that's fair, transparent, and sustainable.</p>
      
      <p>Meet our farmers through the QR code on every packet – each one has a story to tell.</p>
    `,
    author: 'sustenance.lanka',
    authorImage: '/avatars/sustenance-lanka.jpg',
    image: '/news/farmers.jpg',
    category: 'Community',
    readTime: 7,
    tags: ['Farming', 'Community', 'Sustainability', 'Fair Trade'],
  },
];

// Helper function to get article by slug
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

// Helper function to get related articles
export function getRelatedArticles(currentId: number, limit: number = 3): NewsArticle[] {
  return newsArticles
    .filter(article => article.id !== currentId)
    .slice(0, limit);
}