import { testimonials } from '@/app/lib/data';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We take pride in delivering exceptional service and lasting results. Here’s what our clients have to say.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} />
          ))}
        </div>
      </div>
    </section>
  );
}