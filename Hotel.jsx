import React, { useState } from "react";
import "../Styles/Hotel.css";
import TicketBookFunction from "../Pages/TicketPage";
import { Link } from "react-router-dom";
const Hotel = () => {
  const [search, setSearch] = useState("");

  const hotels = [
    { name: "Royal Palace Hotel", img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
    { name: "Sea View Resort", img: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg" },
    { name: "Mountain Top Hotel", img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" },
    { name: "City Grace Hotel", img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
    { name: "Dream View Suites", img: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg" },
    { name: "Royal Grand Hotel", img: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg" },
    { name: "Hill View Resort", img: "https://images.pexels.com/photos/261234/pexels-photo-261234.jpeg" },
    { name: "Luxury Stay Hotel", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" },
    { name: "Lake Side Inn", img: "https://images.pexels.com/photos/207933/pexels-photo-207933.jpeg" },
    { name: "Sunrise Hotel", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" },
  ];

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hotel-section">
      <div className="hotel-top">
        <h3>DezyFlight ✈</h3>
        <input
          type="text"
          placeholder="Search Hotels Here"
          className="hotel-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="h2">Find Your Perfect Stay</h2>

      <div className="hotel-grid">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.img} alt={hotel.name} />
              <p>{hotel.name}</p>
              <button className="btnBook"><Link className="btnBook" to='/ticket'>Book</Link></button>
            </div>
          ))
        ) : (
          <h3 className="no-hotel">No Hotels Found</h3>
        )}
      </div>
    </div>
  );
};

export default Hotel;
