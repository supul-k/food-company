import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import RelatedNews from '@/app/components/news/RelatedNews';
import { getArticleBySlug, getRelatedArticles, newsArticles } from '@/app/lib/newsData';

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Sustenance Lanka`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.id);

  // Schema.org markup for article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: `${article.year}-${article.month}-${article.date}`,
    image: article.image,
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-brand-yellow">Home</Link>
              {' > '}
              <Link href="/news" className="hover:text-brand-yellow">News & Events</Link>
              {' > '}
              <span className="text-brand-yellow">{article.title}</span>
            </div>

            {/* Article Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Hero Image */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                {/* Replace with actual image when available */}
                <div className="text-8xl">📰</div>
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="font-bold text-brand-yellow">{article.date}</span>
                  <span>{article.month} {article.year}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{article.category}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  {article.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-3 pb-6 mb-6 border-b">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                    👤
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{article.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-800 
                    prose-headings:font-bold 
                    prose-p:text-gray-600 
                    prose-p:leading-relaxed
                    prose-a:text-brand-yellow
                    prose-strong:text-gray-800
                    prose-ul:text-gray-600
                    prose-li:text-gray-600
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <RelatedNews articles={relatedArticles} />
          </div>
        </div>
      </main>
      <Footer />

      {/* Schema.org script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}