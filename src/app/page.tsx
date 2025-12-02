'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'Discover high-value keywords with our comprehensive database of 25+ billion keywords across 140+ countries.',
    },
    {
      icon: '📊',
      title: 'Site Audit',
      description: 'Run comprehensive technical SEO audits and identify issues that impact your search rankings.',
    },
    {
      icon: '🎯',
      title: 'Rank Tracking',
      description: 'Monitor your keyword positions across search engines and track your SEO performance over time.',
    },
    {
      icon: '🔗',
      title: 'Backlink Analysis',
      description: 'Analyze your backlink profile and discover link-building opportunities with competitor insights.',
    },
    {
      icon: '📈',
      title: 'Competitor Analysis',
      description: 'Uncover your competitors\' SEO strategies, top keywords, and traffic sources.',
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create SEO-optimized content with our content templates and topic research tools.',
    },
  ];

  const benefits = [
    {
      stat: '25B+',
      label: 'Keywords in Database',
    },
    {
      stat: '140+',
      label: 'Countries Covered',
    },
    {
      stat: '10M+',
      label: 'Active Users',
    },
    {
      stat: '99.9%',
      label: 'Uptime SLA',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'SEO Director, TechCorp',
      content: 'SEMRUSH has transformed our SEO strategy. We\'ve increased organic traffic by 300% in just 6 months.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Manager, StartupXYZ',
      content: 'The competitor analysis features are incredible. We discovered opportunities our competitors didn\'t even know existed.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emma Thompson',
      role: 'Content Strategist, MediaCo',
      content: 'Content templates and topic research have saved us countless hours. Our content now ranks on page 1 consistently.',
      avatar: '👩‍🎨',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Premium Red Theme */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white overflow-hidden">
        {/* Premium animated background with particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Premium grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-40 max-w-7xl relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide">Trusted by 10M+ SEO professionals worldwide</span>
            </div>
            
            {/* Premium heading with enhanced typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-3 text-white drop-shadow-2xl">The All-in-One</span>
              <span className="block bg-gradient-to-r from-red-200 via-pink-200 to-rose-200 bg-clip-text text-transparent drop-shadow-lg">
                SEO Platform
              </span>
              <span className="block mt-3 text-4xl sm:text-5xl md:text-6xl text-white/95">for Global Brands</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Audit your website, track keywords, analyze competitors, and grow organic traffic with enterprise-grade SEO data and insights.
            </p>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
              <Link
                href="/pricing"
                className="group relative px-10 py-5 bg-white text-red-700 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <button
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
              >
                Watch Demo
              </button>
            </div>
            
            {/* Premium Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group px-8 py-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-lg">{benefit.stat}</div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Premium Design */}
      <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6 bg-red-100 text-red-700 rounded-full text-sm font-bold">
              POWERFUL FEATURES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                Everything You Need for SEO Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Powerful tools and insights to help you dominate search rankings and drive organic growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-red-200 transform hover:-translate-y-3 overflow-hidden"
              >
                {/* Premium gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-rose-50/0 group-hover:from-red-50/50 group-hover:to-rose-50/50 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section - You can add your image here */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder for your image - Replace with your image path */}
            {/* 
            To add your image:
            1. Put your image in the public folder (e.g., public/hero-image.jpg)
            2. Uncomment and update the img tag below:
            
            <img
              src="/your-image.jpg"
              alt="SEMRUSH Platform"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            */}
            <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-red-900 via-red-800 to-rose-900 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-xl font-semibold">Add Your Premium Image Here</p>
                <p className="text-sm text-white/80 mt-2">Put your image in public folder and update the code</p>
                <p className="text-xs text-white/60 mt-1">See HOW_TO_ADD_IMAGE.md for instructions</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Design */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6 bg-red-100 text-red-700 rounded-full text-sm font-bold">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Join thousands of companies using SEMRUSH to grow their organic traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Premium gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-rose-50/0 group-hover:from-red-50/30 group-hover:to-rose-50/30 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 transform group-hover:scale-110 transition-transform">{testimonial.avatar}</div>
                    <div>
                      <div className="font-black text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic text-lg">&quot;{testimonial.content}&quot;</p>
                  
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 right-4 text-6xl text-red-100 font-serif">&quot;</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Red Theme */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight drop-shadow-2xl">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Start your free 14-day trial today. No credit card required. Cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-lg mx-auto mb-10">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-2xl border-0"
            />
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-10 py-5 bg-white text-red-700 rounded-2xl font-black text-lg hover:bg-red-50 transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          <p className="text-sm text-white/70 font-medium">
            Trusted by 10M+ users worldwide • 99.9% uptime • 24/7 support
          </p>
        </div>
      </section>
    </main>
  );
}
