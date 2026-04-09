import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-brand-yellow">Chello Dairy</h3>
            <p className="text-sm">Since 1995 | Quality you can trust</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-yellow">Facebook</a>
            <a href="#" className="hover:text-brand-yellow">Instagram</a>
            <a href="#" className="hover:text-brand-yellow">Twitter</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Chello Dairy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}