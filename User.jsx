import React, { useState } from "react";

// 22+ mock users with avatars
const mockUsers = [
  { name: "Aqsa Sadiq", role: "Admin", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Hamza Khan", role: "Editor", img: "https://i.pravatar.cc/100?img=2" },
  { name: "Sara Malik", role: "User", img: "https://i.pravatar.cc/100?img=3" },
  { name: "Ali Raza", role: "Viewer", img: "https://i.pravatar.cc/100?img=4" },
  { name: "Zain Ali", role: "Admin", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Hina Noor", role: "Editor", img: "https://i.pravatar.cc/100?img=6" },
  { name: "Bilal Ahmed", role: "User", img: "https://i.pravatar.cc/100?img=7" },
  { name: "Ayesha Khan", role: "Viewer", img: "https://i.pravatar.cc/100?img=8" },
  { name: "Fahad Malik", role: "Admin", img: "https://i.pravatar.cc/100?img=9" },
  { name: "Mariam Shah", role: "Editor", img: "https://i.pravatar.cc/100?img=10" },
  { name: "Omar Farooq", role: "User", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Sania Iqbal", role: "Viewer", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Ahmad Rafi", role: "Admin", img: "https://i.pravatar.cc/100?img=13" },
  { name: "Nida Tariq", role: "Editor", img: "https://i.pravatar.cc/100?img=14" },
  { name: "Usman Sheikh", role: "User", img: "https://i.pravatar.cc/100?img=15" },
  { name: "Alina Qureshi", role: "Viewer", img: "https://i.pravatar.cc/100?img=16" },
  { name: "Zubair Khan", role: "Admin", img: "https://i.pravatar.cc/100?img=17" },
  { name: "Huma Farah", role: "Editor", img: "https://i.pravatar.cc/100?img=18" },
  { name: "Saad Aslam", role: "User", img: "https://i.pravatar.cc/100?img=19" },
  { name: "Rabia Saeed", role: "Viewer", img: "https://i.pravatar.cc/100?img=20" },
  { name: "Shahid Iqbal", role: "Admin", img: "https://i.pravatar.cc/100?img=21" },
  { name: "Komal Riaz", role: "Editor", img: "https://i.pravatar.cc/100?img=22" },
];

export default function User() {
  const [data] = useState(mockUsers);

  return (
    <section className="page container">
      <h2>Users</h2>
      <p>Registered users list:</p>

      <div className="list" style={{ marginTop: "10px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <strong>{item.name}</strong>
            </div>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
