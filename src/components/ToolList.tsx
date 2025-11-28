'use client';

import { useState, useMemo, useEffect } from 'react';
import { AITool } from '@/data/tools';
import ToolCard from './ToolCard';

interface ToolListProps {
  tools: AITool[];
  initialSearch?: string;
  initialCategory?: string;
  onCategoryChange?: (category: string) => void;
}

type SortOption = 'default' | 'name' | 'category' | 'new' | 'hot' | 'free';

export default function ToolList({ 
  tools, 
  initialSearch = '', 
  initialCategory = '',
  onCategoryChange 
}: ToolListProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync with external search query
  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'all'
  );

  // Sync with external category
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [filterTag, setFilterTag] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(tools.map(tool => tool.category)));
    return ['all', ...cats].sort();
  }, [tools]);

  // Filter and sort tools
  const filteredAndSortedTools = useMemo(() => {
    let result = [...tools];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        tool =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(tool => tool.category === selectedCategory);
    }

    // Tag filter
    if (filterTag === 'hot') {
      result = result.filter(tool => tool.isHot);
    } else if (filterTag === 'new') {
      result = result.filter(tool => tool.isNew);
    } else if (filterTag === 'free') {
      result = result.filter(tool => tool.isFree);
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'new':
        result.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case 'hot':
        result.sort((a, b) => {
          if (a.isHot && !b.isHot) return -1;
          if (!a.isHot && b.isHot) return 1;
          return 0;
        });
        break;
      case 'free':
        result.sort((a, b) => {
          if (a.isFree && !b.isFree) return -1;
          if (!a.isFree && b.isFree) return 1;
          return 0;
        });
        break;
      default:
        // Keep original order
        break;
    }

    return result;
  }, [tools, searchQuery, selectedCategory, sortBy, filterTag]);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search AI tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 pr-10 sm:pr-12"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterTag('all')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors touch-manipulation active:scale-95 ${
              filterTag === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterTag('hot')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors touch-manipulation active:scale-95 ${
              filterTag === 'hot'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Hot
          </button>
          <button
            onClick={() => setFilterTag('new')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors touch-manipulation active:scale-95 ${
              filterTag === 'new'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setFilterTag('free')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors touch-manipulation active:scale-95 ${
              filterTag === 'free'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Free
          </button>
        </div>

        {/* Category and Sort */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1">
            <label className="text-xs sm:text-sm font-medium text-gray-700 sm:whitespace-nowrap">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 touch-manipulation"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1">
            <label className="text-xs sm:text-sm font-medium text-gray-700 sm:whitespace-nowrap">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 touch-manipulation"
            >
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="category">Category</option>
              <option value="hot">Hot First</option>
              <option value="new">New First</option>
              <option value="free">Free First</option>
            </select>
          </div>

          <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left sm:ml-auto">
            Showing {filteredAndSortedTools.length} of {tools.length} tools
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredAndSortedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSortedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500 text-lg">No tools found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setFilterTag('all');
              setSortBy('default');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

