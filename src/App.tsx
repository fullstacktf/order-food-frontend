import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Error404 } from './pages/Error404'
import { Register } from './pages/Register/Register'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'
import styled from '@emotion/styled'

import './index.css'
import { Login } from './pages/Login/Login'

const MainApp = styled.div`
  display: flex;
  margin: 0;
`

const App = () => (
  <MainApp>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/restaurant" element={<RestaurantDetails />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  </MainApp>
)

export default App
