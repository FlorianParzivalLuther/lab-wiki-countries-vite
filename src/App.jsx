// src/App.jsx
import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      <Route path="/countries/:alpha3Code" element={<CountryDetailsPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
