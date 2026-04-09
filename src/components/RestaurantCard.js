import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        alt="restaurant"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-lg truncate">{name}</h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>

        {/* Info Row */}
        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
            ⭐ {avgRating}
          </span>

          <span className="text-gray-600">{costForTwo}</span>
        </div>

        {/* Delivery Time */}
        <p className="text-sm text-gray-500 mt-2">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
