import { stats } from '@/app/lib/aboutData';

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-yellow to-brand-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}