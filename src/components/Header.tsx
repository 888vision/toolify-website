'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 max-w-7xl">
        {/* Logo - Red theme */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent group-hover:from-red-700 group-hover:via-rose-700 transition-all">
            SEMRUSH
          </div>
          <span className="hidden sm:inline text-xs text-gray-500 font-medium">
            Global SEO Suite
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/#features" 
            className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link 
            href="#solutions" 
            className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors relative group"
          >
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link 
            href="#resources" 
            className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors relative group"
          >
            Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {
              const loginSection = document.getElementById('login');
              if (loginSection) {
                loginSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                alert('Login functionality coming soon!');
              }
            }}
            className="text-sm font-semibold text-gray-700 hover:text-red-600 hidden md:block transition-colors"
          >
            Log In
          </button>
          <Link
            href="/pricing"
            className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white rounded-xl font-bold text-sm hover:from-red-700 hover:via-rose-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Start Free Trial
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
