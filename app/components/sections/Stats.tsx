import Image from 'next/image';
import { stats } from '@/app/lib/data';

export default function Stats() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <Image src="/hero/banner.png" alt="Stats Banner" fill className="object-cover opacity-30" />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl font-bold text-brand-green mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}