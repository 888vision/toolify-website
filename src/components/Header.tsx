'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">Toolify</span>
          <span className="text-xs text-gray-500 hidden sm:inline">Toolify logo</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Free Tools
          </Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('products')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center">
              Products
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'products' && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/?filter=new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  New AIs
                </Link>
                <Link href="/?filter=saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Most Saved AIs
                </Link>
                <Link href="/?filter=used" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Most Used AIs
                </Link>
                <Link href="/?filter=apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  AI Apps
                </Link>
                <Link href="/?filter=discord" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Discord of AI
                </Link>
                <Link href="/?filter=extensions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  AI Chrome Extensions
                </Link>
                <Link href="/?filter=gpts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  GPTs
                </Link>
                <Link href="/?filter=models" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  AI Models
                </Link>
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('category')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center">
              Category
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'category' && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-y-auto z-50"
                onMouseEnter={() => setOpenDropdown('category')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Categories
                </Link>
                <Link href="/?category=Chatbots%20%26%20Virtual%20Companions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Chatbots & Virtual Companions
                </Link>
                <Link href="/?category=Office%20%26%20Productivity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Office & Productivity
                </Link>
                <Link href="/?category=Image%20Generation%20%26%20Editing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Image Generation & Editing
                </Link>
                <Link href="/?category=Art%20%26%20Creative%20Design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Art & Creative Design
                </Link>
                <Link href="/?category=Coding%20%26%20Development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Coding & Development
                </Link>
                <Link href="/?category=Video%20%26%20Animation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Video & Animation
                </Link>
                <Link href="/?category=Writing%20%26%20Editing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Writing & Editing
                </Link>
              </div>
            )}
          </div>

          {/* Ranking Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('ranking')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center">
              Ranking
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'ranking' && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={() => setOpenDropdown('ranking')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/?sort=monthly" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Top AI By Monthly
                </Link>
                <Link href="/?sort=categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Top AI By Categories
                </Link>
                <Link href="/?sort=regions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Top AI By Regions
                </Link>
                <Link href="/?sort=source" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Top AI By Source
                </Link>
                <Link href="/?sort=revenue" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Top AI by Revenue
                </Link>
              </div>
            )}
          </div>
          <Link href="/prompts" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Prompts
          </Link>
          <Link href="/jobs" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Jobs
          </Link>
          <Link href="/research" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Research
          </Link>
          <Link href="/submit" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Submit
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {
              // For now, just show an alert. You can replace this with actual login functionality later
              alert('Login functionality will be implemented. For now, you can browse all tools without logging in.');
            }}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden md:block cursor-pointer transition-colors"
          >
            Login
          </button>
          <div className="relative group hidden md:block">
            <button 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
              onClick={() => {
                // Language selector - for now just show current language
                alert('Language selector: Currently set to English (en)');
              }}
            >
              en
            </button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

