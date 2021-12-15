import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./main.css";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { Home } from "./pages/Home/Home";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
