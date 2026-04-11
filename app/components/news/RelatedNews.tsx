'use client';
import Link from 'next/link';
import { NewsArticle } from '@/app/lib/newsData';

interface RelatedNewsProps {
  articles: NewsArticle[];
}

export default function RelatedNews({ articles }: RelatedNewsProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={`/news/${article.slug}`} key={article.id}>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-32 rounded-lg flex items-center justify-center text-3xl mb-3">
                📰
              </div>
              <h4 className="font-semibold text-gray-800 group-hover:text-brand-yellow transition line-clamp-2">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {article.date} {article.month}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}