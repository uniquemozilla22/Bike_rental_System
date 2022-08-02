import React from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/Home.screen";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login/*" element={<LoginScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
