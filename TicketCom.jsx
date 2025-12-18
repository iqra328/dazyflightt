import React from "react";
import "../Styles/TicketBooking.css";

const titles = ["Mr", "Mrs", "Miss", "Dr"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const years = Array.from({ length: 100 }, (_, i) => 2025 - i);
const countries = ["Australia","Pakistan","USA","UK","India","Canada"];

export default function TravelFormUI() {
  return (
    <div className="tfui-root">
      <div className="tfui-card">

        {/* Traveller 01 */}
        <div className="section">
          <div className="tfui-row" style={{ marginBottom: 6 }}>
            <div>
              <div className="tfui-subtitle">Traveller details</div>
              <div className="tfui-muted">Please provide passenger information</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <label className="tfui-label">Traveller 01</label>
              <select className="tfui-select" style={{ width: 160 }}>
                <option>Select from account</option>
              </select>
            </div>
          </div>

          <div className="tfui-grid-3" style={{ marginTop: 8 }}>
            <select className="tfui-select">
              {titles.map((t) => <option key={t}>{t}</option>)}
            </select>
            <input className="tfui-input" placeholder="First Name" />
            <input className="tfui-input" placeholder="Last Name" />
          </div>

          <div className="tfui-grid-3" style={{ marginTop: 12 }}>
            <select className="tfui-select">
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="tfui-select">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select className="tfui-select">
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        {/* Passport info */}
        <div className="section">
          <div className="tfui-subtitle">Passport Information</div>

          <div className="tfui-grid-2" style={{ marginTop: 8 }}>
            <div>
              <div className="tfui-label" style={{ marginBottom: 6 }}>Passport number</div>
              <input className="tfui-input" placeholder="Passport number" />
            </div>
            <div>
              <div className="tfui-label" style={{ marginBottom: 6 }}>Issuing Country</div>
              <select className="tfui-select">
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="tfui-grid-3" style={{ marginTop: 12 }}>
            <div>
              <div className="tfui-label" style={{ marginBottom: 6 }}>Nationality</div>
              <select className="tfui-select">
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <div className="tfui-label" style={{ marginBottom: 6 }}>Expiry date</div>
              <div style={{ display: "flex", gap: 8 }}>
                <select className="tfui-select" style={{ flex: 1 }}>
                  {days.map((d) => <option key={d}>{d}</option>)}
                </select>
                <select className="tfui-select" style={{ flex: 1 }}>
                  {months.map((m) => <option key={m}>{m}</option>)}
                </select>
                <select className="tfui-select" style={{ flex: 1 }}>
                  {years.map((y) => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Traveller 02 */}
        <div className="section">
          <div className="tfui-row" style={{ marginBottom: 6 }}>
            <div className="tfui-subtitle">Traveller 02</div>
            <select className="tfui-select" style={{ width: 180 }}>
              <option>select from account</option>
            </select>
          </div>

          <div className="tfui-grid-3">
            <select className="tfui-select">
              {titles.map((t) => <option key={t}>{t}</option>)}
            </select>
            <input className="tfui-input" placeholder="First Name" />
            <input className="tfui-input" placeholder="Last Name" />
          </div>

          <div className="tfui-grid-3" style={{ marginTop: 12 }}>
            <select className="tfui-select">
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="tfui-select">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select className="tfui-select">
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>

          <div className="tfui-subtitle" style={{ marginTop: 14 }}>Passport Information</div>

          <div className="tfui-grid-2" style={{ marginTop: 8 }}>
            <input className="tfui-input" placeholder="Passport number" />
            <select className="tfui-select">
              {countries.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="tfui-grid-3" style={{ marginTop: 12 }}>
            <select className="tfui-select">
              {countries.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select className="tfui-select">
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="tfui-select">
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>

          <div className="tfui-row" style={{ marginTop: 16 }}>
            <button className="tfui-btn tfui-btn--green">Add frequent flyer number</button>
            <button className="tfui-btn tfui-btn--blue">Special request (optional)</button>
          </div>
        </div>

      </div>
    </div>
  );
}
