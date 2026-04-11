'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/app/lib/newsData';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured';
}

export default function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/news/${article.slug}`}>
        <div className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <div className="relative h-64 bg-gradient-to-br from-amber-100 to-orange-100">
            {/* Replace with actual image when available */}
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              📰
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="font-bold text-brand-yellow">{article.date}</span>
              <span>{article.month} {article.year}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
            <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-brand-yellow transition">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                  👤
                </div>
                <span className="text-sm text-gray-500">{article.author}</span>
              </div>
              <span className="text-brand-yellow font-semibold text-sm group-hover:underline">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-48 flex items-center justify-center text-4xl relative">
          📰
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="font-bold text-brand-yellow">{article.date}</span>
            <span>{article.month}</span>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-brand-yellow transition">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
          <p className="text-xs text-gray-400 mb-3">By {article.author}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{article.readTime} min read</span>
            <span className="text-brand-yellow text-sm group-hover:underline">Read →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}