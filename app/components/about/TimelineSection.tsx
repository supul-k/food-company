'use client';
import { timelineEvents } from '@/app/lib/aboutData';

export default function TimelineSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Chello Journey
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            From humble beginnings in 1995 to becoming a trusted dairy brand, Chello's journey reflects growth, innovation, and commitment to quality.
          </p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-yellow to-brand-green h-full hidden md:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 p-6">
                    <div className={`bg-gradient-to-r ${idx % 2 === 0 ? 'from-amber-50 to-amber-100' : 'from-green-50 to-green-100'} p-6 rounded-xl shadow-md`}>
                      <div className="text-4xl mb-3">{event.icon}</div>
                      <h3 className="text-2xl font-bold text-brand-yellow mb-2">{event.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-yellow rounded-full border-4 border-white shadow-md hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}