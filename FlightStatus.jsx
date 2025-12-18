import React, { useState } from "react";
import "../Styles/FlightStatus.css";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function FlightStatus() {
  const [expandedId, setExpandedId] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAction = (action, flightCode) => {
    alert(`${action} for flight ${flightCode}`);
  };

  const flights = [
    {
      id: 1,
      code: "PK 301",
      status: "On Time",
      statusClass: "on-time",
      route: "Karachi (KHI) → Dubai (DXB)",
      airline: "Pakistan Airways",
      departure: "14:30",
      actualDeparture: "14:28",
      arrival: "17:45",
      gate: "A12",
      terminal: "1",
      aircraft: "Boeing 777",
      duration: "3h 15m",
      timeline: 2
    },
    {
      id: 2,
      code: "PK 456",
      status: "Delayed",
      statusClass: "delayed",
      route: "Lahore (LHE) → Peshawar (PEW)",
      airline: "Pakistan Airways",
      departure: "16:00",
      actualDeparture: "18:30",
      arrival: "17:30",
      gate: "B7",
      terminal: "2",
      reason: "Technical Check",
      delay: "2h 30m",
      timeline: 1
    },
    {
      id: 3,
      code: "PK 202",
      status: "Missed",
      statusClass: "missed",
      route: "Lahore (LHE) → Quetta (UET)",
      airline: "Pakistan Airways",
      departure: "11:00",
      actualDeparture: "",
      arrival: "12:45",
      gate: "C1",
      terminal: "3",
      note: "Passenger did not board",
      nextFlight: "PK 204 at 20:00",
      timeline: 3
    },
    {
      id: 4,
      code: "PK 101",
      status: "Cancelled",
      statusClass: "cancelled",
      route: "Lahore (LHE) → Quetta (UET)",
      airline: "Pakistan Airways",
      departure: "13:00",
      actualDeparture: "",
      arrival: "14:45",
      gate: "-",
      terminal: "-",
      reason: "Bad Weather",
      refund: "Processing",
      timeline: 0
    },
    {
      id: 5,
      code: "PK 789",
      status: "New",
      statusClass: "new",
      route: "Islamabad (ISB) → Karachi (KHI)",
      airline: "Pakistan Airways",
      departure: "19:45",
      actualDeparture: "",
      arrival: "21:30",
      gate: "D15",
      terminal: "1",
      checkin: "Open",
      duration: "1h 45m",
      timeline: 0
    }
  ];

  const timelineSteps = ["Scheduled", "Check-in", "Boarding", "Departed"];

  return (
    <>
      {/* Site Header */}
   <Navbar/>
   <div className="flight-status-container">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1>Flight Status Dashboard</h1>
        
        <div className="controls">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Flights
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'today' ? 'active' : ''}`}
            onClick={() => setActiveFilter('today')}
          >
            Today
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'delayed' ? 'active' : ''}`}
            onClick={() => setActiveFilter('delayed')}
          >
            Delayed
          </button>
          <button className="refresh-btn">
            🔄
          </button>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="stats-bar">
        <div className="stat-card">
          <div className="icon">✈️</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Total Flights</div>
        </div>
        <div className="stat-card">
          <div className="icon">⏰</div>
          <div className="stat-value">1</div>
          <div className="stat-label">Delayed</div>
        </div>
        <div className="stat-card">
          <div className="icon">✅</div>
          <div className="stat-value">3</div>
          <div className="stat-label">On Time</div>
        </div>
        <div className="stat-card">
          <div className="icon">❌</div>
          <div className="stat-value">1</div>
          <div className="stat-label">Cancelled</div>
        </div>
      </div>

      {/* Flight List */}
      <div className="flight-list">
        {flights.map((flight) => (
          <div 
            key={flight.id} 
            className={`status-card ${flight.statusClass}`}
            onClick={() => toggleExpand(flight.id)}
          >
            {/* Card Header */}
            <div className="card-header">
              <div className="flight-basic-info">
                <div className="airline-logo">PK</div>
                <div className="flight-details">
                  <h2>
                    {flight.code}
                    <span className="flight-route">{flight.route}</span>
                  </h2>
                </div>
              </div>
              
              <div className="status-badge">
                {flight.status}
              </div>
            </div>

            {/* Flight Timeline */}
            <div className="timeline">
              {timelineSteps.map((step, index) => (
                <div key={index} className="timeline-step">
                  <div 
                    className={`step-dot ${
                      index < flight.timeline ? 'completed' : 
                      index === flight.timeline ? 'active' : ''
                    }`}
                  />
                  <div className="step-label">{step}</div>
                  {index < timelineSteps.length - 1 && (
                    <div 
                      className={`timeline-connector ${
                        index < flight.timeline ? 'completed' : ''
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Flight Info Grid */}
            <div className="flight-info-grid">
              <div className="info-item">
                <div className="info-label">Departure</div>
                <div className={`info-value ${
                  flight.status === 'Delayed' ? 'warning' : ''
                }`}>
                  {flight.departure}
                  {flight.actualDeparture && (
                    <span style={{ fontSize: '12px', marginLeft: '8px', color: '#64748b' }}>
                      (Actual: {flight.actualDeparture})
                    </span>
                  )}
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-label">Arrival</div>
                <div className="info-value">{flight.arrival}</div>
              </div>
              
              <div className="info-item">
                <div className="info-label">Gate</div>
                <div className="info-value">{flight.gate}</div>
              </div>
              
              <div className="info-item">
                <div className="info-label">Terminal</div>
                <div className="info-value">{flight.terminal}</div>
              </div>
            </div>

            {/* Additional Details */}
            {(flight.reason || flight.delay || flight.note) && (
              <div style={{ 
                backgroundColor: '#f1f5f9', 
                padding: '12px', 
                borderRadius: '8px',
                marginTop: '1rem',
                fontSize: '14px'
              }}>
                {flight.reason && (
                  <div>
                    <strong>Reason: </strong>{flight.reason}
                    {flight.delay && <span> • Delay: {flight.delay}</span>}
                  </div>
                )}
                {flight.note && <div><strong>Note: </strong>{flight.note}</div>}
              </div>
            )}

            {/* Action Buttons (visible only for expanded card) */}
            {expandedId === flight.id && (
              <div className="action-buttons">
                {flight.status === "On Time" && (
                  <>
                    <button 
                      className="btn btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("View Boarding Pass", flight.code);
                      }}
                    >
                      📄 Boarding Pass
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("Track Flight", flight.code);
                      }}
                    >
                      🛰️ Live Tracking
                    </button>
                  </>
                )}

                {flight.status === "Delayed" && (
                  <button 
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Check Alternatives", flight.code);
                    }}
                  >
                    🔄 Check Alternatives
                  </button>
                )}

                {(flight.status === "Missed" || flight.status === "Cancelled") && (
                  <>
                    <button 
                      className="btn btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("Refund Request", flight.code);
                      }}
                    >
                      💰 Request Refund
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("Re-book", flight.code);
                      }}
                    >
                      ✈️ Book Again
                    </button>
                  </>
                )}

                {flight.status === "New" && (
                  <button 
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Book Now", flight.code);
                    }}
                  >
                    🎫 Book Flight
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
 <Footer/>
    </>
  );
}

export default FlightStatus;