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
        className="md:hidden p-2 text-gray-600"
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
          <div className="fixed top-16 left-0 right-0 bg-white border-b shadow-lg z-50 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Free Tools
              </Link>
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Products</p>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  New AIs
                </Link>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Most Saved AIs
                </Link>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Most Used AIs
                </Link>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Category</p>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  All Categories
                </Link>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">More</p>
                <Link href="/prompts" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Prompts
                </Link>
                <Link href="/jobs" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Jobs
                </Link>
                <Link href="/research" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Research
                </Link>
                <Link href="/submit" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
                  Submit
                </Link>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    alert('Login functionality will be implemented. For now, you can browse all tools without logging in.');
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    alert('Language selector: Currently set to English (en)');
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  en
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

