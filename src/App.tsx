import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Home } from './pages/Home/Home'
import { Error404 } from './pages/Error404'
import { Register } from './pages/Register/Register'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'
import { Login } from './pages/Login/Login'
import { Navbar } from './components/Navbar/Navbar'
import styled from '@emotion/styled'

import './index.css'

const MainApp = styled.div`
  display: flex;
  margin: 0;
`

const LOGGEDIN = true
const App = () => {
  if (LOGGEDIN)
    return (
      <MainApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </MainApp>
    )
  else
    return (
      <MainApp>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/"></Route>
            <Route path="/restaurant" element={<RestaurantDetails />}></Route>
            <Route path="/summary" element={<OrderSummary />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </BrowserRouter>
      </MainApp>
    )
}

export default App
