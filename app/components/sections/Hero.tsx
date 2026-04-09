import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Authentic Italian Flavors
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Family recipes passed down for generations. Made with love, crafted with care.
          </p>
          <Button size="lg">Shop Now</Button>
        </div>
      </div>
    </section>
  );
}