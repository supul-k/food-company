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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Sustenance Lanka (Pvt) Ltd",
            "url": "https://www.sustenancelanka.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial Zone I",
              "addressLocality": "Buttala",
              "addressCountry": "LK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "[Your phone number]",
              "contactType": "customer service"
            }
          })
        }}
      />
      <Header />
      <main>
        <HeroCarousel />
        <WhoWeAre />
        <ProductCategories />
        <ProductGrid />
        <Benefits />
        <Stats />
        <Testimonials />
        <NewsEvents />
      </main>
      <Footer />
    </>
  );
}