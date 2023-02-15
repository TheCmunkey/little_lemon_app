
import { Routes, Route } from "react-router-dom";
import HomePage   from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import ReservationsPage   from "../pages/ReservationsPage";
import OrderPage from "../pages/OrderPage";
import LoginPage from "../pages/LoginPage";
import NoPage from "../pages/NoPage";

import ConfirmPage from "../pages/ConfirmPage";

export default function Routing() {
  return (

    <Routes>

          <Route path="/"      element={<HomePage />} exact/>
          <Route path="index"  element={<HomePage />} exact/>
          <Route path="/home"  element={<HomePage />} exact/>

          <Route path="/about" element={<AboutPage />} exact/>
          <Route path="/menu" element={<MenuPage />}   exact/>
          <Route path="/reservations" element={<ReservationsPage/>} exact/>
          <Route path="/order" element={<OrderPage />}     exact/>
          <Route path="/login" element={<LoginPage />}     exact/>
          <Route path="/confirm" element={<ConfirmPage />} exact/>

          <Route path="*"  element={<NoPage />} exact/>

    </Routes>

  );
}

