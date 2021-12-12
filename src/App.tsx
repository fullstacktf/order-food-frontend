import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Link, Route } from "react-router-dom";
import './main.css'
import { Error404 } from "./components/pages/Error404";
import { OrderSummary } from "./components/pages/OrderSummary";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="/404"></Route>
        <Route path="*" element={ <Error404/> }></Route>
      </Routes>
        <Link to="/summary">Summary</Link>
    </BrowserRouter>
  </div>
);

export default App;
