import React, { useState } from "react";

const citiesData = [
  { city: "Karachi", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Lahore", country: "Pakistan", slots: ["7:00 AM", "12:00 PM", "5:00 PM", "10:00 PM"] },
  { city: "Islamabad", country: "Pakistan", slots: ["6:30 AM", "1:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Peshawar", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "5:30 PM", "9:00 PM"] },
  { city: "Quetta", country: "Pakistan", slots: ["6:15 AM", "1:15 PM", "6:15 PM", "9:15 PM"] },
  { city: "Multan", country: "Pakistan", slots: ["6:00 AM", "12:00 PM", "5:30 PM", "9:00 PM"] },
  { city: "Faisalabad", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:00 PM", "9:00 PM"] },
  { city: "Sialkot", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:30 PM"] },
  { city: "Rawalpindi", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "5:30 PM", "9:00 PM"] },
  { city: "Abbottabad", country: "Pakistan", slots: ["6:30 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Hyderabad", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Sukkur", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "5:30 PM", "9:00 PM"] },
  { city: "Gwadar", country: "Pakistan", slots: ["6:30 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Skardu", country: "Pakistan", slots: ["5:30 AM", "12:30 PM", "5:30 PM", "8:30 PM"] },
  { city: "Hunza", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Murree", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Swat", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Chitral", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "5:30 PM", "8:30 PM"] },
  { city: "Neelum Valley", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:00 PM", "9:00 PM"] },
  { city: "Ranikot", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Ziarat", country: "Pakistan", slots: ["6:30 AM", "12:30 PM", "6:00 PM", "9:30 PM"] },
  { city: "Kumrat Valley", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "6:00 PM", "8:30 PM"] },
];

export default function CitiesWithTime() {
  const [data] = useState(citiesData);

  return (
    <section className="page container">
      <h2>Cities & Available Time Slots</h2>
      <p>Explore cities with their available time slots:</p>

      <div className="list" style={{ marginTop: "20px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              marginBottom: "5px",
            }}
          >
            <strong style={{ fontSize: "16px" }}>{item.city}, {item.country}</strong>
            <div style={{ marginTop: "5px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {item.slots.map((slot, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#3e8ffaff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
