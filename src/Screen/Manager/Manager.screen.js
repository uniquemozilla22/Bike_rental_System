import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagerHomeScreen from "./ManagerHome.screen";

const ManagerScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<ManagerHomeScreen />} />
      <Route path="/users" element={<h1>Manager Home Screen</h1>} />
      <Route path="/bikes" element={<h1>Manager Bike Screen</h1>} />
      <Route path="/bookings" element={<h1>Manager Booking Screen</h1>} />
    </Routes>
  );
};

export default ManagerScreen;
