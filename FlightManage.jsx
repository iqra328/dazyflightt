import React, { useState } from "react";
import '../Styles/Manage.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'

export default function FlightManage() {
    const [showTab, setShowTab] = useState("upcoming");
    const [isEditing, setIsEditing] = useState(false);

    const [flightData, setFlightData] = useState({
        airline: "Airline X",
        code: "AX°234",
        date: "NOV 20, 2025, 9:30 AM",
        from: "Karachi",
        to: "Dubai",
        toCode: "DXB",
        seat: "14A",
        meal: "Veg",
        baggage: "20kg",
        status: "Confirmed",
    });

    const [tempData, setTempData] = useState({ ...flightData });
    const [showSlip, setShowSlip] = useState(false);

    const saveEdit = () => {
        setFlightData(tempData);
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setTempData({ ...flightData });
        setIsEditing(false);
    };

    const cancelFlight = () => {
        setFlightData({ ...flightData, status: "Cancelled" });
    };

    const saveSlip = () => {
        const slipText = `
FLIGHT BOOKING SLIP
--------------------------
Airline: ${flightData.airline}
Flight Code: ${flightData.code}
Date: ${flightData.date}
From: ${flightData.from}
To: ${flightData.to}
Seat: ${flightData.seat}
Meal: ${flightData.meal}
Baggage: ${flightData.baggage}
Status: ${flightData.status}
`;
        const blob = new Blob([slipText], { type: "text/plain" });
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "FlightSlip.txt";
        downloadLink.click();
        setShowSlip(false);
    };

    const rebookFlight = () => {
        alert("Rebooking selected flight!");
    };

    return (
        <>
        <Navbar/>
        <div className="flight-manage-container">
            <h2 className="title">Manage Your Flights</h2>

            {/* Tabs */}
            <div className="tabs">
                <button
                    className={showTab === "upcoming" ? "active" : ""}
                    onClick={() => setShowTab("upcoming")}
                >
                    Upcoming Flights
                </button>
                <button
                    className={showTab === "past" ? "active" : ""}
                    onClick={() => setShowTab("past")}
                >
                    Past Flights
                </button>
            </div>

            {/* Search filters */}
            <div className="filters-row">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search by flight number or destination"
                />
                <button
                    className="btn success-outline small-select"
                    onClick={() => alert("Saved!")}
                >
                    Save:
                </button>
                <select className="form-select small-select">
                    <option>Active</option>
                    <option>Cancelled</option>
                </select>
                <select className="form-select small-select">
                    <option>Sort by: Date</option>
                    <option>Sort by: Destination</option>
                </select>
            </div>

            {/* Flight card */}
            <div className="flight-card">
                <div className="flight-head">
                    <div className="left">
                        <img src="https://media.istockphoto.com/id/1303030943/photo/aircraft-landing-at-sunrise.jpg?s=612x612&w=0&k=20&c=xD_nTEQU6QuxQpcTiIc1mPGGbPCvw1KveElUXaKubAY=" className="plane" alt="plane" />
                        <div>
                            {isEditing ? (
                                <>
                                    <input
                                        className="form-control"
                                        value={tempData.airline}
                                        onChange={(e) =>
                                            setTempData({ ...tempData, airline: e.target.value })
                                        }
                                    />
                                    <input
                                        className="form-control mt-1"
                                        value={tempData.code}
                                        onChange={(e) =>
                                            setTempData({ ...tempData, code: e.target.value })
                                        }
                                    />
                                </>
                            ) : (
                                <>
                                    <h5 className="airline">{flightData.airline}</h5>
                                    <span className="flightcode">{flightData.code}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <span className="status">{flightData.status}</span>
                </div>

                {/* Flight info */}
                <div className="flightinfo">
                    <div>
                        {isEditing ? (
                            <input
                                className="form-control"
                                value={tempData.date}
                                onChange={(e) =>
                                    setTempData({ ...tempData, date: e.target.value })
                                }
                            />
                        ) : (
                            <p className="date">{flightData.date}</p>
                        )}
                        <p className="city">{flightData.from}</p>
                    </div>
                    <div className="to-city">
                        <p className="date">{flightData.to}</p>
                        <p className="city">{flightData.toCode}</p>
                    </div>
                </div>

                {/* Addons */}
                <div className="addons">
                    <div className="addon-row">
                        <h6>Add one</h6>
                        <div className="addone-buttons">
                            {isEditing ? (
                                <>
                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={saveEdit}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={cancelEdit}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={cancelFlight}
                                    >
                                        Cancel Flight
                                    </button>
                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={rebookFlight}
                                    >
                                        Rebook
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Seat */}
                    <div className="addon-row">
                        <h6>Seat</h6>
                        <span className="value">{flightData.seat}</span>
                        <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => {
                                const newSeat = prompt("Enter new seat:", flightData.seat);
                                if (newSeat) setFlightData({ ...flightData, seat: newSeat });
                            }}
                        >
                            Change
                        </button>
                    </div>

                    {/* Meal */}
                    <div className="addon-row">
                        <h6>Meal</h6>
                        <span className="value">{flightData.meal}</span>
                        <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => {
                                const newMeal = prompt("Enter new meal:", flightData.meal);
                                if (newMeal) setFlightData({ ...flightData, meal: newMeal });
                            }}
                        >
                            Change
                        </button>
                    </div>

                    {/* Baggage */}
                    <div className="addon-row">
                        <h6>Baggage</h6>
                        <span className="value">{flightData.baggage}</span>
                        <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => {
                                const newBaggage = prompt(
                                    "Enter new baggage:",
                                    flightData.baggage
                                );
                                if (newBaggage)
                                    setFlightData({ ...flightData, baggage: newBaggage });
                            }}
                        >
                            Add More
                        </button>
                    </div>
                </div>
            </div>

            {/* No flights */}
            <div className="noflight">
                <p>No upcoming flights yet.</p>

                {/* Book flight */}
                <button
                    className="btn btn-primary"
                    onClick={() => setShowSlip(true)}
                >
                    Book a Flight
                </button>

                {/* Slip popup */}
                {showSlip && (
                    <div className="slip-overlay">
                        <div className="slip-box">
                            <h4 className="slip-title">Flight Slip</h4>
                            <p className="slip-text">
                                Your flight has been successfully booked!
                                <br />
                                Please save this slip for your record.
                            </p>
                            <div className="slip-buttons">
                                <button className="btn btn-primary" onClick={saveSlip}>
                                    Save Slip
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowSlip(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
}