import React, { useState } from "react";
import "../Styles/MapHeader.css";

const MapHeader = () => {
    const [search, setSearch] = useState()
    const [mapApi, setMapApi] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.832156386542!2d67.00113637540593!3d24.86073464536838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fddbd4162eb%3A0xdda91e8ed0e6ff55!2sKarachi%20City%20Station!5e0!3m2!1sen!2s!4v1733305100000!5m2!1sen!2s");
    const [locations, setLocations] = useState([
        { name: "Central Park", distance: "1.2 km" },
        { name: "City Mall", distance: "2.5 km" },
    ]);
    
    let handleSearch = () => {
        if (!search || search.trim() === '') return;  // first check if search exists
        const url = `https://www.google.com/maps?q=${encodeURIComponent(search)}&output=embed`;
        setMapApi(url);
    }

    return (
        <div className="Wapperh">
            {/* Top bar */}
            <div className="Baro">
                <input
                    type="text"
                    placeholder="Search Your Location"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn" onClick={handleSearch}>Search</button>

                <div className="categories-dropdown">
                    <select className="categories-dropdown-content">
                        <option>Map Categories</option>
                        <option>Hotels</option>
                        <option>Shopping Malls</option>
                        <option>Tourist Spots</option>
                        <option>Hospitals</option>
                        <option>Gas Stations</option>
                    </select>
                </div>
            </div>

            {/* Map + Sidebar */}
            <div className="map-container">

                {/* ⭐ WORKING IFRAME ⭐ */}
                <iframe
                    src={mapApi}
                    width="100%"
                    height="500"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="Right">
                    <h3 className="sidebar-title">Nearby Locations</h3>
                    <div className="location-list">
                        <div className="location-item">
                            <span className="location-icon">📍</span>
                            <span className="location-name">Central Park</span>
                            <span className="location-distance">1.2 km</span>
                        </div>
                        <div className="location-item">
                            <span className="location-icon">📍</span>
                            <span className="location-name">City Mall</span>
                            <span className="location-distance">2.5 km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapHeader;
