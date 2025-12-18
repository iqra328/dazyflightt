import React from "react";
import "../Styles/OverSeasSection.css";
// import img1 from "../../assets/Pictures/hotel 4.jpg";
// import img2 from "../../assets/Pictures/hotl 3.jpg";
// import img3 from "../../assets/Pictures/images.jpeg";

export default function OverSeasSection() {
  return (
    <div className="overseas-wrapper">
      <h1 className="h1">Overseas package <br />
       With 20% off</h1>
      


      <div className="card-grid">

        {/* LEFT BIG CARD */}
        <div className="card large-card">
          <img src={'https://tse2.mm.bing.net/th/id/OIP.sGJJDYrKV5mvttquDqArDAHaEP?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'} className="card-img" />

          <div className="card-content">
            <h3>Hotel Phin</h3>
            <p className="sub">New York</p>
            <p className="price">$199</p>
            <p className="offer">20% off in California + Free garage</p>
          </div>
        </div>

       
        <div className="right-cards">

          {/* Small Card #1 */}
          <div className="card small-card">
            <img src={"https://tse2.mm.bing.net/th/id/OIP.sGJJDYrKV5mvttquDqArDAHaEP?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"} className="card-img" />

            <div className="card-content">
              <h3>Hotel Zero</h3>
              <p className="sub">Australia to Canada</p>
              <p className="price">$129</p>
            </div>
          </div>

          {/* Small Card #2 */}
          <div className="card small-card">
            <img src={'https://tse2.mm.bing.net/th/id/OIP.sGJJDYrKV5mvttquDqArDAHaEP?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'} className="card-img" />

            <div className="card-content">
              <h3>Hotel Phinz</h3>
              <p className="sub">Australia to Canada</p>
              <p className="price">$249</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
