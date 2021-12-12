import styled from "@emotion/styled";
import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import './main.css'
import { Error404 } from "./pages/Error404";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";

const MainApp = styled.div`
display: flex;
margin: 0;
`

const App = () => (
  <MainApp>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/"></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="/404"></Route>
        <Route path="*" element={ <Error404/> }></Route>
      </Routes>
    </BrowserRouter>
  </MainApp>
);

export default App;
