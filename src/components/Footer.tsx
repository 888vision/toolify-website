export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="/#features" className="hover:text-blue-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-blue-600 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-blue-600 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#blog" className="hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-blue-600 transition-colors">
                  Academy
                </a>
              </li>
              <li>
                <a href="#webinars" className="hover:text-blue-600 transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-blue-600 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-blue-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-blue-600 transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-blue-600 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                <a 
                  href="mailto:visionfish@outlook.com" 
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  visionfish@outlook.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+85257495090" 
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +852-5749 5090
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SEMRUSH
              </div>
              <span className="text-xs text-gray-500">Global SEO Suite</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © 2025 SEMRUSH Global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
