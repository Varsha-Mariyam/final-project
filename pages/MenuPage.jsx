import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants";
import "./MenuPage.css";
import green from './green.jpg';



const MenuPage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${green})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
      };
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    cuisine: "",
    priceRange: "",
    dietaryRestrictions: "",
  });

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchTerm) &&
      (filters.cuisine === "" || restaurant.cuisine === filters.cuisine) &&
      (filters.priceRange === "" || restaurant.priceRange === filters.priceRange) &&
      (filters.dietaryRestrictions === "" ||
        restaurant.dietaryRestrictions === filters.dietaryRestrictions)
    );
  });

  return (
    <div className="menu-page">
      <h1>AVAILABLE RESTAURANT</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select name="cuisine" onChange={handleFilterChange}>
          <option value="">All Cuisines</option>
          <option value="Japanese">Japanese</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Indian">Indian</option>
        </select>
        <select name="priceRange" onChange={handleFilterChange}>
          <option value="">All Price Ranges</option>
          <option value="100-500">BELOW 500</option>
          <option value="500-1500">ABOVE 500</option>
          <option value="500-2000">BELOW 2000</option>
        </select>
        <select name="dietaryRestrictions" onChange={handleFilterChange}>
          <option value="">All Dietary Options</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
