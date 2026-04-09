import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ProductImageGallery from '@/app/components/products/ProductImageGallery';
import ProductInfo from '@/app/components/products/ProductInfo';
import ProductDetailsTab from '@/app/components/products/ProductDetailsTab';
import { getProductBySlug, getRelatedProducts, products } from '@/app/lib/productsData';
import RelatedProducts from '@/app/components/products/RelatedProducts';

interface ProductPageProps {
  params: Promise<{  // ← Change: params is a Promise
    slug: string;
  }>;
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;  // ← Change: await params
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Chello Dairy Products`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, Chello Dairy, dairy products, Sri Lanka`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;  // ← Change: await params
  const product = getProductBySlug(slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  // Schema.org markup for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'LKR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'Chello Dairy',
    },
    category: product.category,
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-yellow">Home</Link>
            {' > '}
            <Link href="/products" className="hover:text-brand-yellow">Products</Link>
            {' > '}
            <Link href={`/products?category=${product.category}`} className="hover:text-brand-yellow">
              {product.category}
            </Link>
            {' > '}
            <span className="text-brand-yellow">{product.name}</span>
          </div>

          {/* Product Main Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <ProductImageGallery 
                images={product.images || [product.image]} 
                productName={product.name}
              />
              
              {/* Product Info */}
              <ProductInfo product={product} />
            </div>

            {/* Product Details Tabs */}
            <ProductDetailsTab product={product} />
          </div>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <Footer />

      {/* Add Schema.org script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}