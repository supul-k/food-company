import { operations } from '@/app/lib/aboutData';

export default function OperationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Operations
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Sustenance Lanka (Pvt) Ltd is engaged in sustainable harvesting, innovative product development, and value-added processing of agricultural produce from the Uva Wellassa region, creating nutritious products for modern consumers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((op, idx) => (
              <div key={idx} className={`${op.color} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{op.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{op.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{op.description}</p>
                <div className="mt-4 w-12 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}