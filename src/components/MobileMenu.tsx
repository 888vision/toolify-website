'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 sm:top-20 left-0 right-0 bg-white border-b shadow-xl z-50 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-6 space-y-1">
              <Link
                href="/"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#features"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#solutions"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#resources"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    alert('Login functionality coming soon!');
                  }}
                  className="w-full text-left text-base font-medium text-gray-700 hover:text-blue-600 py-3 transition-colors"
                >
                  Log In
                </button>
                <Link
                  href="/pricing"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
