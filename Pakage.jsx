import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Main from "../Components/Main.jsx";
import OverseasSection from "../Components/OverseasSection.jsx";
import SearchFilterBar from "../Components/SearchFilterBar.jsx";
import Footer from "../Components/Footer.jsx";

import Weather from "../Components/Weather.jsx";
import Location from "../Components/Locations.jsx";
import User from "../Components/User.jsx";
import Time from "../Components/Time.jsx";
import '../App.css'
function HotelPage() {
  const [selectedSection, setSelectedSection] = useState(""); // state for filter

  const renderSection = () => {
    switch (selectedSection) {
      case "weather":
        return <Weather />;
      case "location":
        return <Location />;
      case "user":
        return <User />;
      case "time":
        return <Time />;
      default:
        return null; // nothing selected
    }
  };

  return (
    <>
      <Navbar />
    
      <Main />      <div className="main-container">
        <SearchFilterBar setSelectedSection={setSelectedSection} /> 
        </div> 
      <div className="main-container">
     

          <OverseasSection />
          
          </div> 
      {/* pass setSelectedSection to filter bar */}
     
      {/* dynamic section */}
      {renderSection()}

      <Footer />
    </>
  );
}

export default HotelPage;
