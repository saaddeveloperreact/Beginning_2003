const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-300"></div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>

              {/* Lines */}
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>

              {/* Bottom Row */}
              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-12"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
