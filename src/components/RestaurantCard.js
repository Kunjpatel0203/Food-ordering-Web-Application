import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      {/* Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-logo"
      />

      {/* Details */}
      <div className="restaurant-details">
        {/* Name */}
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>

        {/* Rating, Cost, Delivery */}
        <div className="esa-rating">
          <h4 className="rating">
            <MdStarRate
              className="rating-logo"
              style={
                avgRating > 4.2
                  ? { backgroundColor: "var(--green)" }
                  : { backgroundColor: "var(--red)" }
              }
            />
            <span>{avgRating === "--" ? "N/A" : avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} mins</h4>
        </div>

        {/* Cuisine */}
        <p className="cousine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>

        {/* Location */}
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
