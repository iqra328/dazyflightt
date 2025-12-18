import React from "react";
import "../Styles/SearchFilterBar.css";

function SearchFilterBar({ setSelectedSection }) {

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedSection(value); // set state in parent
  };

  return (
    <div className="search-filter-wrapper">
      <div className="search-input">
        <input type="text" placeholder="Search name..." />
      </div>

      <div className="filter-box">
        <button className="filter-btn">Filter ⬇</button>

        <select className="filter-select" onChange={handleFilterChange}>
          <option value="">Select Option</option>
          <option value="location">📍 Location</option>
          <option value="weather">☀️ Weather</option>
          <option value="time">⏰ Time</option>
          <option value="user">👨‍✈️ User</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilterBar;
