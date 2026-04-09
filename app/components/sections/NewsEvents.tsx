import { newsEvents } from '@/app/lib/data';
import Button from '../ui/Button';

export default function NewsEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">News & Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsEvents.map((news) => (
            <div key={news.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md">
              <div className="bg-amber-100 h-32 flex items-center justify-center text-3xl">📰</div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="font-bold text-brand-yellow">{news.date}</span> {news.month}
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{news.excerpt}</p>
                <p className="text-xs text-gray-400">By {news.author}</p>
                <Button variant="outline" className="mt-3 w-full text-sm">Continue reading</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary">Follow Us on Facebook</Button>
        </div>
      </div>
    </section>
  );
}