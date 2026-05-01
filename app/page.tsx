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
            "@type": "Organization",
            "name": "Sustenance Lanka (Pvt) Ltd",
            "url": "https://www.sustenancelanka.com",
            "logo": "https://www.sustenancelanka.com/android-chrome-512x512.png",
            "image": "https://www.sustenancelanka.com/android-chrome-512x512.png",
            "description": "Leading provider of quality products in Sri Lanka",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial Zone I",
              "addressLocality": "Buttala",
              "addressCountry": "LK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+94 [Your phone number]",
              "contactType": "customer service",
              "availableLanguage": ["English", "Sinhala"]
            },
            "sameAs": [
              "https://www.facebook.com/sustenancelanka",
              "https://www.linkedin.com/company/sustenancelanka"
            ]
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