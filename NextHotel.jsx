import React, { useState, useEffect } from "react";
import Hotel from "./Hotel.jsx";

function NextHotel() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mocki.io/v1/6c6d1e3f-0b57-4a45-8de8-5b89e7d345a3")
      .then((res) => res.json())
      .then((data) => {
        // map API data to match Hotel.jsx structure
        const mappedData = data.map((h) => ({
          name: h.name,
          img: h.image || "https://via.placeholder.com/300",
        }));
        setHotels(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading hotels...</p>;

  return <Hotel hotelsData={hotels} />;
}

export default NextHotel;
