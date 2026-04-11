import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NewsCard from '../components/news/NewsCard';
import { newsArticles } from '../lib/newsData';

export const metadata = {
  title: 'News & Events | Sustenance Lanka',
  description: 'Stay updated with our latest news, events, and insights about traditional foods, wellness, and community impact.',
};

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const recentArticles = newsArticles.slice(1);

  return (
    <>
      <Header />
      <main className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                News & Events
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Stay updated with our latest stories, announcements, and insights from the world of traditional foods and wellness.
              </p>
            </div>

            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Story</h2>
                <NewsCard article={featuredArticle} variant="featured" />
              </div>
            )}

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}