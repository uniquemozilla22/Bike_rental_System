import React from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";
import Bikelist from "./Screen/Bikelist.screen";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login/*" element={<LoginScreen />} />
        <Route path="/bikes/*" element={<Bikelist />} />
      </Routes>
    </Layout>
  );
}

export default App;
