import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";
import ManagerScreen from "./Screen/Manager/Manager.screen";

function App() {
  const isLoggedIn = useSelector((state) => state.user.token);
  const isManager = useSelector((state) => state.user.isManager);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigation("/login");
  }, [isLoggedIn]);

  return (
    <Layout>
      <Routes>
        {!isLoggedIn && <Route path="/login/*" element={<LoginScreen />} />}
        {isLoggedIn && !isManager && (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/bikes/*" element={<Bikelist />} />
          </>
        )}
        {isLoggedIn && isManager && (
          <>
            <Route path="/manager/*" element={<ManagerScreen />} />
          </>
        )}

        <Route path="*" element={<NofoundScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
