import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () =>
  <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex items-center p-6">
      <Skeleton circle={true} height={40} width={40} />
      <div className="ml-4">
        <h2 className="text-xl font-bold text-gray-900">
          <Skeleton width={100} />
          <span className="text-gray-500 text-sm dark:text-gray-400">
            <Skeleton width={50} />
          </span>
        </h2>
        <p className="text-gray-700">
          <Skeleton width={80} />
        </p>
      </div>
    </div>
    <div className="px-6 pb-6">
      <h3 className="text-lg font-semibold text-gray-800">
        <Skeleton width={150} />
      </h3>
      <div className="mt-4 text-gray-600">
        <Skeleton count={3} />
      </div>
      <div className="flex mt-2 items-center gap-2 justify-start">
        <Skeleton width={25} height={25} />
        <Skeleton width={20} />
        <Skeleton width={25} height={25} />
        <Skeleton width={20} />
      </div>
    </div>
  </div>;

export default SkeletonCard;
