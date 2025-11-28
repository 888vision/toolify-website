'use client';

import { useParams, useRouter } from 'next/navigation';
import { aiTools } from '@/data/tools';
import { AITool } from '@/data/tools';
import Link from 'next/link';
import { useState } from 'react';

export default function ToolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const toolId = params.id as string;
  
  const tool = aiTools.find(t => t.id === toolId);
  
  const [copied, setCopied] = useState(false);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
          <p className="text-gray-600 mb-6">The tool you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get related tools (same category)
  const relatedTools = aiTools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  // Get favicon URL
  const getFaviconUrl = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return '';
    }
  };

  const defaultIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23E5E7EB" rx="8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="32" font-weight="600" fill="%236B7280"%3EAI%3C/text%3E%3C/svg%3E';

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tool Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center overflow-hidden border-2 border-white/50 shadow-xl relative">
                  {/* Fallback with first letter */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-400">
                    <span className="text-white font-bold text-3xl">{tool.name.charAt(0).toUpperCase()}</span>
                  </div>
                  {/* Try to load icon */}
                  <img
                    src={getFaviconUrl(tool.url) || defaultIcon}
                    alt={`${tool.name} icon`}
                    className="w-full h-full object-contain p-2 absolute inset-0 opacity-0 transition-opacity duration-300"
                    style={{ imageRendering: 'crisp-edges' }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Just hide the image, fallback will show
                      target.style.opacity = '0';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tool.isFree && (
                          <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded">
                            Free
                          </span>
                        )}
                        {tool.isHot && (
                          <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded">
                            Hot
                          </span>
                        )}
                        {tool.isNew && (
                          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      Visit Website
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button
                      onClick={handleShare}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          Share
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Category</h2>
              <Link
                href={`/?category=${encodeURIComponent(tool.category)}`}
                className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {tool.category}
              </Link>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedTools.map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/tool/${relatedTool.id}`}
                      className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center overflow-hidden border-2 border-white/50 shadow-md flex-shrink-0">
                          <img
                            src={getFaviconUrl(relatedTool.url) || defaultIcon}
                            alt={`${relatedTool.name} icon`}
                            className="w-full h-full object-contain p-1.5"
                            style={{ imageRendering: 'crisp-edges' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = defaultIcon;
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{relatedTool.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{relatedTool.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tool Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="font-medium text-gray-900">{tool.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Website</p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 break-all"
                  >
                    {tool.url}
                  </a>
                </div>
                {tool.isFree && (
                  <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-800">✓ Free to use</p>
                  </div>
                )}
                {tool.isHot && (
                  <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-800">🔥 Popular tool</p>
                  </div>
                )}
                {tool.isNew && (
                  <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">✨ Newly added</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

