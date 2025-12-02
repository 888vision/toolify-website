'use client';

import { useParams, useRouter } from 'next/navigation';
import { aiTools } from '@/data/tools';
import Link from 'next/link';
import { useState } from 'react';

function getPersonaAndUseCases(category: string) {
  const base = {
    personas: ['Founders & operators', 'Marketing & growth teams', 'Product & engineering'],
    useCases: [
      'Discover best-in-class AI tools for your stack in minutes.',
      'Quickly shortlist 3–5 vendors to evaluate for upcoming initiatives.',
      'Benchmark your current tools against emerging alternatives.',
    ],
  };

  const mapping: Record<
    string,
    { personas?: string[]; useCases?: string[]; notes?: string }
  > = {
    'Image Generation & Editing': {
      personas: ['Creative directors', 'Designers', 'Marketing teams'],
      useCases: [
        'Generate on-brand visuals and campaign assets at scale.',
        'Rapidly prototype creative directions before studio production.',
        'Localise creatives for different markets with minimal overhead.',
      ],
      notes: 'Most teams pair image generation tools with collaboration and asset management platforms.',
    },
    'Chatbots & Virtual Companions': {
      personas: ['Customer support leaders', 'Community teams', 'Product managers'],
      useCases: [
        'Deflect repetitive support tickets with AI-first chat experiences.',
        'Offer 24/7 assistance across web, in-product, and messaging channels.',
        'Prototype new conversational experiences before engineering investment.',
      ],
      notes: 'Consider data governance and handoff-to-human flows when evaluating chat solutions.',
    },
    'Coding & Development': {
      personas: ['Engineering leaders', 'Individual contributors', 'Developer experience teams'],
      useCases: [
        'Boost code throughput with AI pair programming and review.',
        'Standardise patterns and best practices via AI-assisted refactors.',
        'Accelerate prototyping and internal tools development.',
      ],
      notes: 'Align AI coding tools with your security, compliance, and source control strategy.',
    },
    'Office & Productivity': {
      personas: ['Ops leaders', 'Knowledge managers', 'Cross-functional teams'],
      useCases: [
        'Turn scattered documents into searchable, living knowledge.',
        'Automate recurring reporting and status updates.',
        'Give every team a shared workspace for AI-assisted work.',
      ],
      notes: 'Evaluate how well tools integrate with your existing productivity suite.',
    },
    'Business Management': {
      personas: ['Revenue leaders', 'Operations', 'Strategy & finance'],
      useCases: [
        'Gain a unified view of pipeline, revenue, and operations.',
        'Model different scenarios and investment paths with AI.',
        'Design repeatable playbooks for go-to-market and retention.',
      ],
      notes: 'Prioritise tools that can plug into your current data and analytics stack.',
    },
    'Video & Animation': {
      personas: ['Content teams', 'Creative studios', 'Marketing'],
      useCases: [
        'Produce high-quality explainers and promos without full studio budgets.',
        'Localise and repurpose existing content across markets and channels.',
        'Prototype new video formats and narratives rapidly.',
      ],
      notes: 'Ensure output formats and quality align with your distribution channels.',
    },
    'Education & Translation': {
      personas: ['Educators', 'L&D teams', 'Knowledge workers'],
      useCases: [
        'Build adaptive learning experiences for different audiences.',
        'Translate and localise content while preserving nuance.',
        'Turn subject-matter expertise into reusable learning paths.',
      ],
      notes: 'Focus on accuracy, domain adaptation, and review workflows.',
    },
  };

  const matched = mapping[category] ?? {};

  return {
    personas: matched.personas ?? base.personas,
    useCases: matched.useCases ?? base.useCases,
    notes: matched.notes,
  };
}

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

  const defaultIcon =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23E5E7EB" rx="8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="32" font-weight="600" fill="%236B7280"%3EAI%3C/text%3E%3C/svg%3E';

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

  const personaConfig = getPersonaAndUseCases(tool.category);

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

            {/* Operator overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Where this tool shines</h2>
                <p className="text-sm text-gray-600">
                  Use this tool as part of a modern AI stack for{' '}
                  <span className="font-semibold">{tool.category.toLowerCase()}</span>. Teams often
                  pair it with complementary tools across adjacent categories for end-to-end flows.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] mb-2">
                    Best suited for
                  </p>
                  <ul className="space-y-1.5">
                    {personaConfig.personas.map((persona) => (
                      <li key={persona} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{persona}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] mb-2">
                    Suggested use cases
                  </p>
                  <ul className="space-y-1.5">
                    {personaConfig.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {personaConfig.notes && (
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.25em] mb-1">
                    Evaluation note
                  </p>
                  <p className="text-sm text-blue-800">{personaConfig.notes}</p>
                </div>
              )}
            </div>

            {/* Implementation blueprint & stack fit */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] mb-2">
                    4–week implementation blueprint
                  </p>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li>
                      <span className="font-semibold text-gray-900">Week 1 · Discovery</span> — Align on objectives,
                      success metrics, and key workflows where {tool.name} will be evaluated.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">Week 2 · Pilot</span> — Roll out to a small set of
                      champion users, instrument adoption and qualitative feedback.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">Week 3 · Integration</span> — Connect with adjacent
                      tools in your stack and refine governance, permissions, and review flows.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">Week 4 · Scale decision</span> — Compare outcomes
                      vs. baselines and decide on rollout, budget, and enablement needs.
                    </li>
                  </ol>
                </div>
                <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em]">
                    Where it fits in a modern stack
                  </p>
                  <p className="text-sm text-gray-700">
                    {tool.name} typically sits alongside your existing systems as a{' '}
                    <span className="font-semibold lowercase">{tool.category}</span> layer, augmenting—not replacing—
                    foundational data, identity, and collaboration platforms.
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>Upstream: data sources, content repositories, or customer touchpoints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>Core: {tool.name} orchestrates AI-powered generation, reasoning, or automation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Downstream: analytics, review workflows, and business systems of record.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500">
                    Use Toolify to identify complementary tools that complete your end‑to‑end flow.
                  </p>
                </div>
              </div>
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

