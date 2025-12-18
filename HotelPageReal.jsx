import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Main from "../Components/Main.jsx";
import BottomBar from "../Components/ButtomBar.jsx";
import Hotel from "../Components/Hotel.jsx";
import Footer from "../Components/Footer.jsx";
import '../App.css'

function HotelRealPagee() {
  return (
    <div>
      <Navbar />
      <Main />
      <BottomBar />
      <div className="main-container"><Hotel /></div>
      {/* Hardcoded hotel search */}
      <Footer />
    </div>
  );
}

export default HotelRealPagee;