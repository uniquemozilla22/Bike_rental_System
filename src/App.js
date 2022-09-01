import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";
import ManagerScreen from "./Screen/Manager/Manager.screen";

function App() {
  const { token: isLoggedIn, isManager } = useSelector((state) => state.user);
  return (
    <Layout>
      <Routes>
        {isManager && <Route path="/manager/*" element={<ManagerScreen />} />}

        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/bikes/*" element={<Bikelist />} />

        {!isLoggedIn && <Route path="/login/*" element={<LoginScreen />} />}
        <Route
          path="*"
          element={
            !!isLoggedIn ? <NofoundScreen /> : <Navigate to={"/login"} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
