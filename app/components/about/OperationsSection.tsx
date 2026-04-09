import { operations } from '@/app/lib/aboutData';

export default function OperationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Dairy, Your Daily Freshness
            </h2>
            <p className="text-gray-600 text-lg">
              Chello Dairy Products (Pvt) Ltd is engaged in the collection, processing, production, and distribution of dairy products across Sri Lanka. The company has built a strong end-to-end supply chain from farmers to retail outlets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((op, idx) => (
              <div key={idx} className={`${op.color} p-6 rounded-xl shadow-md hover:shadow-lg transition`}>
                <div className="text-5xl mb-4">{op.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{op.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{op.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}