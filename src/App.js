import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./navbar/Header";
import Login from "./Login"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="/Login" element={<Login />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
