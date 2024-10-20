// src/components/SkeletonCard.js

const SkeletonCard = () => {
    return (
      <div className="border relative min-w-[10vw] h-fit w-fit bg-gray-300 rounded-lg p-4 shadow-lg animate-pulse">
        <div className="h-32 bg-gray-400 rounded-t-lg"></div> {/* Placeholder for the image */}
        <div className="flex z-10 mt-4">
          <div className="flex flex-col">
            <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div> {/* Placeholder for champion name */}
            <div className="h-4 bg-gray-400 rounded w-1/2"></div> {/* Placeholder for subname */}
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;
  