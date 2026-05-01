import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sustenance Lanka (Pvt) Ltd | Official Website',
  description: 'Official website of Sustenance Lanka (Pvt) Ltd - food company specializing in natural, nutritious products inspired by Sri Lankan heritage.',
  keywords: 'Sustenance Lanka, Sustenance Lanka Pvt Ltd, sustenance lanka company',
  authors: [{ name: 'Sustenance Lanka' }],
  
  // ADD THIS ICONS SECTION
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  
  // ADD MANIFEST
  manifest: '/site.webmanifest',
  
  // IMPROVE OPEN GRAPH WITH IMAGES
  openGraph: {
    title: 'Sustenance Lanka (Pvt) Ltd',
    description: 'Official website of Sustenance Lanka (Pvt) Ltd - food company specializing in natural, nutritious products inspired by Sri Lankan heritage.',
    url: 'https://www.sustenancelanka.com/',
    siteName: 'Sustenance Lanka',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.sustenancelanka.com/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Sustenance Lanka Logo',
      },
    ],
  },
  
  // ADD TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: 'Sustenance Lanka (Pvt) Ltd',
    description: 'Official website of Sustenance Lanka (Pvt) Ltd - food company specializing in natural, nutritious products inspired by Sri Lankan heritage.',
    images: ['https://www.sustenancelanka.com/twitter-image.jpg'], // Create this image
  },
  
  publisher: 'Sustenance Lanka (Pvt) Ltd',
  alternates: {
    canonical: 'https://www.sustenancelanka.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}