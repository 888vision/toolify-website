'use client';

import { useState, useRef, useMemo } from 'react';
import { aiTools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import ToolList from '@/components/ToolList';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [showAllTools, setShowAllTools] = useState(false);
  const toolsSectionRef = useRef<HTMLDivElement>(null);
  
  const hotTools = aiTools.filter(tool => tool.isHot);
  const freeTools = aiTools.filter(tool => tool.isFree);
  const newTools = aiTools.filter(tool => tool.isNew);

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'today' | 'new' | 'saved' | 'used' | null>(null);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    aiTools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(aiTools.map(tool => tool.category))).sort();
  }, []);

  const handleSearch = () => {
    if (heroSearchQuery.trim()) {
      setShowAllTools(true);
      // Scroll to tools section
      setTimeout(() => {
        toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowAllTools(true);
    setHeroSearchQuery('');
    setActiveFilter(null);
    // Scroll to tools section
    setTimeout(() => {
      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Filter tools based on active filter
  const getFilteredTools = () => {
    let filtered = [...aiTools];
    
    if (activeFilter === 'new') {
      filtered = filtered.filter(tool => tool.isNew);
    } else if (activeFilter === 'saved') {
      // For now, show hot tools as "most saved"
      filtered = filtered.filter(tool => tool.isHot);
    } else if (activeFilter === 'used') {
      // For now, show hot tools as "most used"
      filtered = filtered.filter(tool => tool.isHot);
    } else if (activeFilter === 'today') {
      // Show new tools as "today"
      filtered = filtered.filter(tool => tool.isNew || tool.isHot);
    }
    
    return filtered;
  };

  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
              <span className="block mb-2">Discover The Best</span>
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                AI Websites & Tools
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
              {aiTools.length} AIs and {categories.length} categories in the best AI tools directory.
              <br className="hidden sm:block" />
              <span className="text-white/70 block sm:inline">AI tools list & GPTs store are updated daily by ChatGPT.</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2">
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-all min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-white">{aiTools.length}</div>
                <div className="text-xs sm:text-sm text-white/80">Tools</div>
              </div>
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-all min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-white">{hotTools.length}</div>
                <div className="text-xs sm:text-sm text-white/80">Hot</div>
              </div>
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-all min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-white">{freeTools.length}</div>
                <div className="text-xs sm:text-sm text-white/80">Free</div>
              </div>
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-all min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-white">{newTools.length}</div>
                <div className="text-xs sm:text-sm text-white/80">New</div>
              </div>
            </div>
            
            <p className="text-sm text-white/70 mb-8">
              Sponsored by <span className="font-semibold text-white">i10X</span> - All-in-one AI platform with 500+ AI tools and top models
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={heroSearchQuery}
                  onChange={(e) => {
                    setHeroSearchQuery(e.target.value);
                    if (e.target.value.trim()) {
                      setShowAllTools(true);
                    } else {
                      setShowAllTools(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white/95 backdrop-blur-md border-2 border-white/30 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 shadow-xl text-gray-900 placeholder-gray-500 pr-20 sm:pr-24"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:from-yellow-500 hover:to-pink-600 transition-all font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>
            
            {/* My Tools Section */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
              <span className="text-sm sm:text-base font-semibold text-white/95 w-full sm:w-auto text-center sm:text-left">My Tools</span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center w-full sm:w-auto">
                <button 
                  onClick={() => {
                    setActiveFilter(activeFilter === 'today' ? null : 'today');
                    setShowAllTools(true);
                    setHeroSearchQuery('');
                    setSelectedCategory('');
                    setTimeout(() => {
                      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeFilter === 'today'
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:scale-105'
                  }`}
                >
                  Today
                </button>
                <button 
                  onClick={() => {
                    setActiveFilter(activeFilter === 'new' ? null : 'new');
                    setShowAllTools(true);
                    setHeroSearchQuery('');
                    setSelectedCategory('');
                    setTimeout(() => {
                      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation ${
                    activeFilter === 'new'
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-xl'
                      : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  New
                </button>
                <button 
                  onClick={() => {
                    setActiveFilter(activeFilter === 'saved' ? null : 'saved');
                    setShowAllTools(true);
                    setHeroSearchQuery('');
                    setSelectedCategory('');
                    setTimeout(() => {
                      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation ${
                    activeFilter === 'saved'
                      ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-xl'
                      : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  Most Saved
                </button>
                <button 
                  onClick={() => {
                    setActiveFilter(activeFilter === 'used' ? null : 'used');
                    setShowAllTools(true);
                    setHeroSearchQuery('');
                    setSelectedCategory('');
                    setTimeout(() => {
                      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation ${
                    activeFilter === 'used'
                      ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-xl'
                      : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  Most Used
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>@toolify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section - Only show first 8 for faster loading */}
      {hotTools.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Featured Tools
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium">Handpicked AI tools you should try</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {hotTools.slice(0, 8).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* All Tools Section with Search and Filters */}
      <section ref={toolsSectionRef} className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl relative z-10">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {showAllTools || heroSearchQuery ? 'Search Results' : 'All Free AI Tools'}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {showAllTools || heroSearchQuery 
                ? `Searching through ${aiTools.length} AI tools`
                : `Browse and search through ${aiTools.length} AI tools`}
            </p>
          </div>
          {(showAllTools || heroSearchQuery || selectedCategory || activeFilter) && (
            <button
              onClick={() => {
                setShowAllTools(false);
                setHeroSearchQuery('');
                setSelectedCategory('');
                setActiveFilter(null);
              }}
              className="px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation active:scale-95 w-full sm:w-auto"
            >
              Clear Filters
            </button>
          )}
        </div>
        
        {showAllTools || heroSearchQuery || selectedCategory || activeFilter ? (
          <ToolList 
            tools={activeFilter ? getFilteredTools() : aiTools} 
            initialSearch={heroSearchQuery}
            initialCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Only show first 20 tools initially for faster loading */}
            {aiTools.slice(0, 20).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
            {aiTools.length > 20 && (
              <div className="col-span-full text-center py-6 sm:py-8">
                <button
                  onClick={() => setShowAllTools(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 touch-manipulation"
                >
                  View All {aiTools.length} Tools
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="relative bg-gradient-to-b from-white/95 to-white backdrop-blur-sm border-t border-gray-200/50">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Browse by Category
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="p-4 sm:p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer text-left w-full group shadow-md hover:shadow-xl transform hover:-translate-y-2 active:scale-95 touch-manipulation"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm sm:text-base font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all block truncate mb-1 sm:mb-2">
                      {category}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-purple-600">
                      {categoryCounts[category] || 0} {categoryCounts[category] === 1 ? 'tool' : 'tools'}
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl ml-2 flex-shrink-0 group-hover:scale-125 transition-transform">💼</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
