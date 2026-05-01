import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info Column */}
          <div>
            <h3 className="text-xl font-bold text-brand-green mb-4">Sustenance Lanka</h3>
            <p className="text-sm text-gray-400 mb-4">
              Preserving Sri Lankan agricultural post-harvest using the best preservation methods,
              introducing nutritious new products to the market.
            </p>

            {/* This div now handles spacing */}
            <div className="flex flex-col gap-3 text-sm">
              {/* Main Office */}
              <div className="flex gap-2">
                <span className="text-brand-green shrink-0">🏢</span>
                <div>
                  <span className="font-semibold">Factory / Branch:</span><br />
                  Industrial Zone I,<br />
                  Buttala,<br />
                  Sri Lanka.
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex gap-2">
                <span className="text-brand-green shrink-0">🏭</span>
                <div>
                  <span className="font-semibold">Head Office:</span><br />
                  Warnagala RD,<br />
                  Guruluwana,<br />
                  Ratnapura,<br />
                  Sri Lanka.
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-2">
                <span className="text-brand-green shrink-0">📞</span>
                <span>+94453141999</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-brand-green shrink-0">✉️</span>
                <a href="mailto:info@sustenance.lk" className="hover:text-brand-green transition-colors">
                  info@sustenance.lk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-green transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-brand-green transition-colors">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/post-harvest" className="hover:text-brand-green transition-colors">
                  Post-Harvest Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-green transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Focus Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Focus</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand-green">✓</span>
                <span>Agricultural Preservation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green">✓</span>
                <span>Value Added Food & Beverages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green">✓</span>
                <span>Innovative R&D</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green">✓</span>
                <span>Quality Storage Solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green">✓</span>
                <span>Distribution Network</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for updates on new products and innovations.
            </p>
            <form className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-brand-green transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-green text-white rounded-lg text-sm font-semibold hover:bg-opacity-80 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Sustenance Lanka (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-brand-green transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-brand-green transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}