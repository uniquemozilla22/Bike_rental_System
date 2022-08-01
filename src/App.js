import React from "react";
import LoginScreen from "./Screen/Login.screen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login/*" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
