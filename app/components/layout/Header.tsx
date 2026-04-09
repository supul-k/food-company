'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand-yellow">
          Chello<span className="text-brand-green"> Dairy</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-brand-yellow transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="primary" className="hidden md:block">Order Now</Button>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button variant="primary" fullWidth>Order Now</Button>
        </div>
      )}
    </header>
  );
}