import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useDispatch, useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";
import ManagerScreen from "./Screen/Manager/Manager.screen";
import useCookie from "./hooks/useCookie";
import { Logout } from "./store/Actions/Login.action";

function App() {
  const { token, isManager } = useSelector((state) => state.user);
  return (
    <Layout>
      <Routes>
        {isManager && <Route path="/manager/*" element={<ManagerScreen />} />}

        {token && !isManager && (
          <>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/bikes/*" element={<Bikelist />} />
          </>
        )}

        <Route path="/login/*" element={<LoginScreen />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
