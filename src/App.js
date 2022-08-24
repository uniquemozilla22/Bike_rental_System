import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";
import ManagerScreen from "./Screen/Manager/Manager.screen";
import useCookie from "./hooks/useCookie";

function App() {
  const isLoggedIn = useSelector((state) => state.user.token);
  const isManager = useSelector((state) => state.user.isManager);
  const navigation = useNavigate();
  const cookie = useCookie("token");

  useEffect(() => {
    if (!isLoggedIn) navigation("/login");
  }, [isLoggedIn]);

  const LoginRoute = () => {
    if (isLoggedIn) {
      if (isManager) {
        return <Route path="/manager/*" element={<ManagerScreen />} />;
      } else {
        return (
          <>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/bikes/*" element={<Bikelist />} />
          </>
        );
      }
    } else {
      return <Route path="/login/*" element={<LoginScreen />} />;
    }
  };

  return (
    <Layout>
      <Routes>
        {LoginRoute()}
        <Route path="*" element={<NofoundScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
