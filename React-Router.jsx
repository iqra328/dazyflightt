import { Routes, Route } from "react-router-dom";
import MapPage from "../Pages/MapPage";
import TicketBookFunction from "../Pages/TicketPage";
import Pakage from "../Pages/Pakage";
import Weather from "../Components/Weather";
import Location from "../Components/Locations";
import User from "../Components/User";
import Time from "../Components/Time";
import HotelRealPage from "../Pages/HotelPageReal";
import FlightStatus from "../Pages/FlightStatus";
import About from '../Pages/About.jsx'
import Auth from '../Pages/Profile.jsx'
import FlightMAnage from '../Pages/FlightManage.jsx'


function ReactRouter() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/ticket" element={<TicketBookFunction />} />
      <Route path="/package" element={<Pakage />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/location" element={<Location />} />
      <Route path="/flightstatus" element={<FlightStatus />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      <Route path="/flightmanage" element={<FlightMAnage />} />
      <Route path="/time" element={<Time />} />
      <Route path="/hotel" element={<HotelRealPage />} />
    </Routes>
  );
}

export default ReactRouter;