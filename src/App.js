import React, { useEffect } from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";
import { useSelector } from "react-redux";
import NofoundScreen from "./Screen/Notfound.screen";

function App() {
  const isLoggedIn = useSelector((state) => state.user.token);
  const navigation = useNavigate();

  useEffect(() => {
    // if (!isLoggedIn) navigation("/login");
  }, [isLoggedIn, navigation]);

  return (
    <Layout>
      <Routes>
        {!isLoggedIn && <Route path="/login/*" element={<LoginScreen />} />}

        {isLoggedIn && (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/bikes/*" element={<Bikelist />} />
          </>
        )}
        <Route path="*" element={<NofoundScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
