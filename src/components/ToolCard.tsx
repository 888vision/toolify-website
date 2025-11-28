'use client';

import { useState } from 'react';
import { AITool } from '@/data/tools';
import { useRouter } from 'next/navigation';

interface ToolCardProps {
  tool: AITool;
}

// Function to get favicon URL - with multiple fallback sources
function getFaviconUrl(url: string, attempt: number = 0): string {
  try {
    const domain = new URL(url).hostname;
    // Remove www. prefix for better icon matching
    const cleanDomain = domain.replace(/^www\./, '');
    const sources = [
      `https://icons.duckduckgo.com/ip3/${cleanDomain}.ico`,
      `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=128`,
      `https://${cleanDomain}/favicon.ico`,
      `https://favicons.githubusercontent.com/${cleanDomain}`,
    ];
    return sources[attempt] || sources[0];
  } catch {
    return '';
  }
}

// Default icon SVG - more visible with gradient background
const defaultIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%239C88FF;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%237B68EE;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="56" height="56" fill="url(%23grad)" rx="12"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="700" fill="white"%3EAI%3C/text%3E%3C/svg%3E';

export default function ToolCard({ tool }: ToolCardProps) {
  const router = useRouter();
  const [faviconUrl, setFaviconUrl] = useState(getFaviconUrl(tool.url));
  const [iconAttempt, setIconAttempt] = useState(0);

  const handleCardClick = () => {
    router.push(`/tool/${tool.id}`);
  };

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (iconAttempt < 3) {
      // Try alternative icon source
      const newUrl = getFaviconUrl(tool.url, iconAttempt + 1);
      if (newUrl && newUrl !== faviconUrl) {
        setFaviconUrl(newUrl);
        setIconAttempt(iconAttempt + 1);
        // Reset image state to try loading again
        setImageLoaded(false);
      } else {
        // No more sources, stop trying
        setImageError(true);
        setImageLoaded(true);
      }
    } else {
      // All attempts failed, stop trying
      setImageError(true);
      setImageLoaded(true);
    }
  };

  return (
    <div 
      className="tool-card group relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-purple-300/50 hover:-translate-y-2 cursor-pointer active:scale-95 overflow-hidden touch-manipulation"
      onClick={handleCardClick}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-3">
          <div className="flex items-start gap-3 mb-2">
            {/* Tool Icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center overflow-hidden border-2 border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
              {/* Always show fallback with first letter */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-400">
                <span className="text-white font-bold text-lg">{tool.name.charAt(0).toUpperCase()}</span>
              </div>
              {/* Try to load icon on top */}
              {!imageError && (
                <img
                  src={faviconUrl || defaultIcon}
                  alt={`${tool.name} icon`}
                  className={`w-full h-full object-contain p-1 absolute inset-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  style={{ imageRendering: 'crisp-edges' }}
                  onLoad={() => setImageLoaded(true)}
                  onError={handleImageError}
                  loading="lazy"
                />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight mb-2">
                {tool.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.isFree && (
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full shadow-md whitespace-nowrap">
                    Free
                  </span>
                )}
                {tool.isHot && (
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full shadow-md whitespace-nowrap animate-pulse">
                    🔥 Hot
                  </span>
                )}
                {tool.isNew && (
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-full shadow-md whitespace-nowrap">
                    ✨ New
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {tool.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
          <span className="text-xs font-medium text-gray-500 truncate mr-2 px-2 py-1 bg-gray-100/50 rounded-md">{tool.category}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-blue-700 transition-all flex-shrink-0">
              Explore →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

