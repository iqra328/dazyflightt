import React, { useState } from "react";

const mockLocations = [
  { city: "Karachi", province: "Sindh", icon: "🏖️" },
  { city: "Lahore", province: "Punjab", icon: "🏰" },
  { city: "Islamabad", province: "Islamabad Capital Territory", icon: "🏙️" },
  { city: "Quetta", province: "Balochistan", icon: "⛰️" },
  { city: "Peshawar", province: "KPK", icon: "🏯" },
  { city: "Sukkur", province: "Sindh", icon: "🌉" },
  { city: "Faisalabad", province: "Punjab", icon: "🏭" },
  { city: "Multan", province: "Punjab", icon: "🕌" },
  { city: "Sialkot", province: "Punjab", icon: "⚽" },
  { city: "Rawalpindi", province: "Punjab", icon: "🏙️" },
  { city: "Abbottabad", province: "KPK", icon: "⛰️" },
  { city: "Hyderabad", province: "Sindh", icon: "🏙️" },
  { city: "Gwadar", province: "Balochistan", icon: "🌊" },
  { city: "Skardu", province: "Gilgit-Baltistan", icon: "⛰️" },
  { city: "Hunza", province: "Gilgit-Baltistan", icon: "🏞️" },
  { city: "Murree", province: "Punjab", icon: "⛰️" },
  { city: "Swat", province: "KPK", icon: "🏞️" },
  { city: "Chitral", province: "KPK", icon: "⛰️" },
  { city: "Neelum Valley", province: "Azad Kashmir", icon: "🏞️" },
  { city: "Ranikot", province: "Sindh", icon: "🏯" },
  { city: "Ziarat", province: "Balochistan", icon: "⛰️" },
  { city: "Kumrat Valley", province: "KPK", icon: "🏞️" },
];

export default function Locations() {
  const [data] = useState(mockLocations);

  return (
    <section className="page container">
      <h2>Locations</h2>
      <p>Select a city to see details:</p>

      <div className="list">
        {data.map((item, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "24px" }}>
              <span>{item.icon}</span>
              <strong>{item.city}</strong>
            </div>
            <span>{item.province}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
