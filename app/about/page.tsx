import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata = {
  title: 'About Us | Italian Delights',
  description: 'Learn about our story and family tradition',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Founded in {COMPANY_INFO.founded} by the Martini family, we've been bringing 
                authentic Italian flavors to tables around the world for nearly four decades.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To share the authentic taste of Italy using traditional methods and the 
                finest ingredients, while maintaining our commitment to quality and sustainability.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Quality Promise</h2>
              <p className="text-gray-600 mb-6">
                Every product is made using traditional methods, with no artificial 
                preservatives or additives. Just pure, delicious ingredients sourced 
                from family farms across Italy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">40+</div>
                  <div className="text-gray-500">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">50+</div>
                  <div className="text-gray-500">Family Recipes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">10K+</div>
                  <div className="text-gray-500">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}