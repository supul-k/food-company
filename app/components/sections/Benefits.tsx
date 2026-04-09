import { benefits } from '@/app/lib/data';

export default function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Packed with Goodness in Every Sip</h2>
          <p className="text-gray-600">
            Chello Dairy products are naturally rich in protein, vitamins, and minerals. From strong bones to healthy digestion and lasting energy, every product is crafted to nourish your body.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand-green">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}