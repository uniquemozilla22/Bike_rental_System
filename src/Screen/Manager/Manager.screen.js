import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagerBikeScreen from "./ManagerBike.screen";
import ManagerHomeScreen from "./ManagerHome.screen";

const ManagerScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<ManagerHomeScreen />} />
      <Route path="/users" element={<ManagerBikeScreen />} />
      <Route path="/bikes" element={<ManagerBikeScreen />} />
      <Route path="/bookings" element={<h1>Manager Booking Screen</h1>} />
    </Routes>
  );
};

export default ManagerScreen;
