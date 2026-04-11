import Link from 'next/link';
import { newsArticles } from '@/app/lib/newsData';

export default function NewsEvents() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">News & Events</h2>
        <p className="text-gray-600 text-center mb-12">Stay up to date with our latest stories</p>
        <div className="grid md:grid-cols-3 gap-8">
          {latest.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-yellow uppercase">{article.category}</span>
                <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2 group-hover:text-brand-yellow transition">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                <p className="text-xs text-gray-400 mt-4">{article.date} {article.month} {article.year} · {article.readTime} min read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
