import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ButtonBar.css";

const ButtonBar = () => {
  return (
    <div className="container">
      <div className="button-bar">
        <Link to="/" className="item airport">Airport Map</Link>
        <Link to="/ticket" className="item">Ticket Booking</Link>
        <Link to="/hotel" className="item">Hotel Reservation</Link>
        <Link to="/flightstatus" className="item">Flight Status</Link>
      </div>
    </div>
  );
};

export default ButtonBar;
