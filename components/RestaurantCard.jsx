import React from "react";

const RestaurantCard = ({ restaurant }) => {
  // Define colors for each cuisine
  const cuisineColors = {
    Japanese: "#FFF9C4", 
    Italian: "white", // Tomato Red
    American: "white", // Dodger Blue
    Indian: "#e3f2fd", // Lime Green
    Default: "white", // White for any uncategorized cuisine
  };

  // Get the background color for the cuisine
  const backgroundColor = cuisineColors[restaurant.cuisine] || cuisineColors.Default;

  return (
    <div
      className="restaurant-card"
      style={{ backgroundColor: backgroundColor, color: "#333" }} // Text color for contrast
    >
      <h3>{restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Price Range: {restaurant.priceRange}</p>
      <p>Dietary Options: {restaurant.dietaryRestrictions}</p>
    </div>
  );
};

export default RestaurantCard;
