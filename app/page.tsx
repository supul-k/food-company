import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Hero from '@/app/components/sections/Hero';
import ProductGrid from '@/app/components/sections/ProductGrid';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}