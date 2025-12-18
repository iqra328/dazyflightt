import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";

const App = () => {
  // Form submission handler
  const onFinish = async (values) => {
    await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    alert("Form Submitted Successfully!");
  };

  // State for traveller form
  const [travellerFormData, setTravellerFormData] = useState([
    { 
      title: "Mr", 
      firstName: "Jordan", 
      lastName: "", 
      dob: { day: "28", month: "September", year: "" }, 
      passportNumber: "98877772171182", 
      issuingCountry: "Australia", 
      nationality: "Australia", 
      sameAsNationality: true,
      expiry: { day: "24", month: "", year: "2027" }, 
      frequentFlyer: "", 
      specialRequest: "" 
    }
  ]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const countries = ["Australia", "United States", "Canada", "United Kingdom", "New Zealand", "India", "Germany", "France"];

  // Handler for traveller form changes
  const handleTravellerChange = (index, field, value) => {
    const newData = [...travellerFormData];
    if(field.includes('.')){
      const [main, sub] = field.split('.');
      newData[index][main][sub] = value;
    } else {
      newData[index][field] = value;
    }
    setTravellerFormData(newData);
  };

  const handleCheckboxChange = (index, field) => {
    const newData = [...travellerFormData];
    newData[index][field] = !newData[index][field];
    if (field === 'sameAsNationality' && newData[index][field]) {
      newData[index].issuingCountry = newData[index].nationality;
    }
    setTravellerFormData(newData);
  };

  const handleTravellerSubmit = async (e) => {
    e.preventDefault();
    console.log("Traveller Form Data:", travellerFormData);
    alert("Traveller data saved successfully!");
  };

  return (
    <>

      {/* ********************TRAVELLER FORM SECTION****************** */}
      <div className="main-container">
        <form className="traveller-form" onSubmit={handleTravellerSubmit}>
          <h2>Traveler Form</h2>
          
          {travellerFormData.map((trav, index) => (
            <div key={index} className="traveller-section">
              {/* Task Name / Personal Details */}
              <div className="highlight-box">
                <div className="section-title">Task Name</div>
                <table className="form-table">
                  <thead>
                    <tr>
                      <th>Date of Birth</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-row">
                          <select value={trav.title} onChange={(e) => handleTravellerChange(index, "title", e.target.value)}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                          </select>
                          <input type="text" placeholder="First Name" value={trav.firstName} onChange={(e)=>handleTravellerChange(index,"firstName",e.target.value)} />
                          <input type="text" placeholder="Last Name" value={trav.lastName} onChange={(e)=>handleTravellerChange(index,"lastName",e.target.value)} />
                        </div>
                      </td>
                      <td>
                        <input type="number" placeholder="DD" value={trav.dob.day} onChange={(e)=>handleTravellerChange(index,"dob.day",e.target.value)} />
                      </td>
                      <td>
                        <select value={trav.dob.month} onChange={(e)=>handleTravellerChange(index,"dob.month",e.target.value)} className="month-select">
                          <option value="">Month</option>
                          {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input type="number" placeholder="YYYY" value={trav.dob.year} onChange={(e)=>handleTravellerChange(index,"dob.year",e.target.value)} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Passport Information */}
              <div className="highlight-box">
                <div className="section-title">Passport Information</div>
                <table className="form-table">
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Passport number</th>
                      <th>Issuing Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-row">
                          <label>Nationality</label>
                          <select value={trav.nationality} onChange={(e) => handleTravellerChange(index, "nationality", e.target.value)}>
                            <option value="">Select country</option>
                            {countries.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td>
                        <input type="text" value={trav.passportNumber} onChange={(e)=>handleTravellerChange(index,"passportNumber",e.target.value)} />
                      </td>
                      <td>
                        <div className="checkbox-container">
                          <input 
                            type="checkbox" 
                            checked={trav.sameAsNationality} 
                            onChange={() => handleCheckboxChange(index, 'sameAsNationality')} 
                          />
                          <span>Same as Nationality</span>
                        </div>
                        {!trav.sameAsNationality && (
                          <select 
                            value={trav.issuingCountry} 
                            onChange={(e)=>handleTravellerChange(index,"issuingCountry",e.target.value)}
                            style={{ marginTop: '10px', width: '100%' }}
                          >
                            <option value="">Select country</option>
                            {countries.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="form-table" style={{ marginTop: '20px' }}>
                  <thead>
                    <tr>
                      <th>Expiry dates</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input type="number" placeholder="DD" value={trav.expiry.day} onChange={(e)=>handleTravellerChange(index,"expiry.day",e.target.value)} />
                      </td>
                      <td>
                        <select value={trav.expiry.month} onChange={(e)=>handleTravellerChange(index,"expiry.month",e.target.value)} className="month-select">
                          <option value="">Month</option>
                          {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input type="number" placeholder="YYYY" value={trav.expiry.year} onChange={(e)=>handleTravellerChange(index,"expiry.year",e.target.value)} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Add Request Ever number */}
              <div className="highlight-box">
                <div className="section-title">Add Request Ever number</div>
                <table className="form-table">
                  <thead>
                    <tr>
                      <th>Time/day</th>
                      <th>Select from account</th>
                      <th>Setting paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-row">
                          <label>Full Name</label>
                          <select value={trav.title} onChange={(e) => handleTravellerChange(index, "title", e.target.value)} style={{ minWidth: '80px' }}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                          </select>
                          <input type="text" value={trav.firstName} onChange={(e)=>handleTravellerChange(index,"firstName",e.target.value)} />
                        </div>
                      </td>
                      <td>
                        <div className="form-row">
                          <label>Date of Birth</label>
                          <input type="number" placeholder="DD" value={trav.dob.day} onChange={(e)=>handleTravellerChange(index,"dob.day",e.target.value)} />
                          <select value={trav.dob.month} onChange={(e)=>handleTravellerChange(index,"dob.month",e.target.value)} className="month-select">
                            <option value="">Month</option>
                            {months.map(month => (
                              <option key={month} value={month}>{month}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td>
                        <input type="number" placeholder="YYYY" value={trav.dob.year} onChange={(e)=>handleTravellerChange(index,"dob.year",e.target.value)} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      </div>
      <style>{`
        /* *******************NAVBAR STYLING*************** */
        .nav {
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          color: #1C2FFF;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #1C2FFF;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .nav-links li a {
          color: #1C2FFF;
          text-decoration: none;
          font-size: 18px;
          transition: 0.2s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-links li a:hover {
          color: #ff00ff;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          color: #1C2FFF;
          cursor: pointer;
          padding: 5px;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .menu-btn { display: block; }
        }

        /* *************************MAIN STYLING************************* */
        .main-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 1100px;
          padding: 60px 0;
          margin: 0 auto;
          text-align: left;
        }

        .left {
          flex: 1;
          text-align: left;
        }

        .heading {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: left;
        }

        .description {
          font-size: 18px;
          color: #444;
          line-height: 1.6;
          max-width: 450px;
          text-align: left;
        }

        .right {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .main-image {
          width: 100%;
          max-width: 450px;
          border-radius: 10px;
          object-fit: cover;
          display: block;
        }

        /* Responsive Fixes */
        @media (max-width: 1040px) {
          .main-container {
            width: 90%;
            max-width: 1000px;
            padding: 60px 20px;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            flex-direction: column;
            gap: 40px;
            width: 90%;
            padding: 40px 20px;
          }

          .left, .right {
            width: 100%;
            text-align: left;
          }

          .heading {
            font-size: 36px;
          }

          .description {
            max-width: 100%;
          }

          .main-image {
            max-width: 400px;
            margin: 0 auto;
            display: block;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            width: 95%;
            padding: 30px 15px;
          }

          .heading {
            font-size: 28px;
          }

          .description {
            font-size: 16px;
          }

          .main-image {
            max-width: 300px;
          }
        }

        /* ********************BOTTOMBAR STYLING****************** */
        .container {
          display: flex;
          justify-content: center;
        }

        .button-bar {
          display: flex;
          justify-content: center;
          width: 1000px;
          align-items: center;
          background: #e8f3ff;
          border-radius: 10px;
          gap: 10px;
          padding: 10px;
          box-sizing: border-box;
          margin: 20px auto;
        }

        .item {
          flex: 1;
          text-align: center;
          padding: 15px 0;
          background: transparent;
          font-size: 16px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
          min-width: 0;
          text-decoration: none;
          color: #002AFF;
        }

        .item:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .airport {
          color: #ffffff;
          font-weight: 600;
          background-color: #002AFF;
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .button-bar {
            width: 95%;
            max-width: 1000px;
          }
        }

        @media (max-width: 768px) {
          .button-bar {
            width: 95%;
            flex-wrap: wrap;
          }

          .item {
            flex: 1 0 calc(50% - 10px);
            min-width: 150px;
            padding: 12px 0;
          }
        }

        @media (max-width: 480px) {
          .button-bar {
            width: 95%;
            flex-direction: column;
            gap: 8px;
          }

          .item {
            width: 100%;
            padding: 12px 0;
          }
        }

        /* ********************TRAVELLER FORM STYLING****************** */
        .traveller-form {
          width: 90%;
          margin: 20px auto;
          background: #e6f0ff;
          padding: 20px;
          border-radius: 10px;
          font-family: Arial, sans-serif;
        }

        .traveller-section {
          border-bottom: 2px solid #ccc;
          margin-bottom: 30px;
          padding-bottom: 20px;
        }

        .traveller-section h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .form-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .form-table th {
          background: #f0f0f0;
          padding: 12px;
          text-align: left;
          font-weight: normal;
          border-bottom: 2px solid #ddd;
        }

        .form-table td {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }

        .form-table tr:last-child td {
          border-bottom: none;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .traveller-form input, .traveller-form select {
          padding: 8px 12px;
          border-radius: 5px;
          border: 1px solid #888;
          font-size: 14px;
        }

        .traveller-form input[type="number"] {
          width: 60px;
        }

        .traveller-form input[type="text"] {
          min-width: 200px;
        }

        .traveller-form select {
          min-width: 150px;
          background: white;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .checkbox-container input[type="checkbox"] {
          width: 20px;
          height: 20px;
        }

        .section-title {
          font-size: 16px;
          color: #0066cc;
          margin: 15px 0 10px 0;
          font-weight: bold;
        }

        .highlight-box {
          background: white;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          margin: 10px 0;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          align-items: center;
        }

        .traveller-form button {
          padding: 12px 30px;
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }

        .traveller-form button:hover {
          background: #0052a3;
        }

        .traveller-form label {
          font-weight: bold;
          color: #333;
          min-width: 150px;
        }

        .date-inputs {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .month-select {
          min-width: 120px;
        }

        /* ************************FOOTER STYLING************* */
        .footer-container {
          display: flex;
          justify-content: center;
          margin: 40px auto;
          align-items: center;
          width: 1000px;
          background: #4b74ff;
          padding: 40px;
          border-radius: 10px;
          color: white;
        }

        .left-section {
          width: 50%;
        }

        .left-section h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .left-section p {
          width: 70%;
        }

        .flight-image {
          width: 200px;
          margin-top: 20px;
        }

        .right-section {
          width: 35%;
          display: flex;
          justify-content: center;
        }

        .form-box {
          background: rgba(255, 255, 255, 0.3);
          padding: 25px;
          border-radius: 12px;
          width: 100%;
          text-align: center;
        }

        .form-box h3 {
          margin-bottom: 15px;
        }

        .book-btn {
          width: 100%;
          font-weight: bold;
        }

        .qr-area {
          margin: 15px 0;
        }

        .qr-area svg {
          font-size: 80px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            padding: 30px;
            width: 95%;
          }

          .left-section,
          .right-section {
            width: 100%;
          }

          .left-section p {
            width: 100%;
          }

          .flight-image {
            width: 150px;
            margin: 20px auto;
          }

          .form-box {
            width: 90%;
            margin-top: 20px;
          }
        }

        @media (max-width: 500px) {
          .footer-container {
            padding: 20px;
          }

          .left-section h2 {
            font-size: 22px;
          }

          .flight-image {
            width: 120px;
          }

          .form-box {
            padding: 18px;
          }

          .qr-area svg {
            font-size: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default App;