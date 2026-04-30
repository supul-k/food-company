import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sustenance Lanka (Pvt) Ltd | Official Website',
  description: 'Official website of Sustenance Lanka (Pvt) Ltd - food company specializing in natural, nutritious products inspired by Sri Lankan heritage.',
  keywords: 'Sustenance Lanka, Sustenance Lanka Pvt Ltd, sustenance lanka company',
  authors: [{ name: 'Sustenance Lanka' }],
  openGraph: {
    title: 'Sustenance Lanka (Pvt) Ltd',
    description: 'Official website of Sustenance Lanka (Pvt) Ltd - food company specializing in natural, nutritious products inspired by Sri Lankan heritage.',
    url: 'https://www.sustenancelanka.com/',
    siteName: 'Sustenance Lanka',
    type: 'website',
    locale: 'en_US',
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