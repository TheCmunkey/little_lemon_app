
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// import About from "./pages/About";
// import Reservation from "./pages/BookingPage";
// import Order from "./pages/Order";
// import Login from "./pages/Login";
// import Confirmation from "./pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Reservations/>} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} /> */}
    </Routes>
  );
}

