export default function SkeletonCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm animate-pulse">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-gray-200 flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
}


