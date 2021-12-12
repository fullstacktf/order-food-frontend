import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import './main.css'
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
