import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { PRODUCTS } from '@/app/lib/constants';
import Card from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';

export const metadata = {
  title: 'Our Products | Italian Delights',
  description: 'Explore our range of authentic Italian products',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">All Products</h1>
          <p className="text-gray-600 text-center mb-12">
            Browse our complete collection
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.id}>
                <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                  🍕
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">
                      ${product.price}
                    </span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}