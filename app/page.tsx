import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroCarousel from './components/sections/HeroCarousel';
import WhoWeAre from './components/sections/WhoWeAre';
import ProductCategories from './components/sections/ProductCategories';
import ProductGrid from './components/sections/ProductGrid';
import Benefits from './components/sections/Benefits';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import NewsEvents from './components/sections/NewsEvents';
import PopularProducts from './components/sections/PopularProducts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <WhoWeAre />
        <ProductCategories />
        <ProductGrid />
        <PopularProducts />
        <Benefits />
        <Stats />
        <Testimonials />
        <NewsEvents />
      </main>
      <Footer />
    </>
  );
}