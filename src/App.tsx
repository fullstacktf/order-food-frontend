import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ProductInfo } from "./components/ProductsInfo/ProductInfo";
const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/tote" element={<ProductInfo />}></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
