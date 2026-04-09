import { stats } from '@/app/lib/data';

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl font-bold text-brand-yellow mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}