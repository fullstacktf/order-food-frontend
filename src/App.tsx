import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import './assets/styles/main.css'
import { OrderSummary } from "./features/OrderSummary/pages/OrderSummary";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
