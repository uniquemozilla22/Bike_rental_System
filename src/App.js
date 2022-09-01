import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";
import ManagerScreen from "./Screen/Manager/Manager.screen";
import ManagerAuthLayout from "./Components/Manager.auth";
import LoggedInAuthLayout from "./Components/Logged.auth";

function App() {
  const { token: isLoggedIn, isManager } = useSelector((state) => state.user);
  return (
    <Layout>
      <Routes>
        <Route
          path="/manager/*"
          element={
            <LoggedInAuthLayout>
              <ManagerAuthLayout>
                <ManagerScreen />
              </ManagerAuthLayout>
            </LoggedInAuthLayout>
          }
        />
        <Route
          path="/"
          exact
          element={
            <LoggedInAuthLayout>
              <HomeScreen />
            </LoggedInAuthLayout>
          }
        />
        <Route
          path="/bikes/*"
          element={
            <LoggedInAuthLayout>
              <Bikelist />
            </LoggedInAuthLayout>
          }
        />
        <Route path="/login/*" element={<LoginScreen />} />

        <Route path="*" element={<NofoundScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
