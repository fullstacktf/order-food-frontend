import styled from '@emotion/styled'
import { Login } from '@mui/icons-material'
import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Error404 } from './pages/Error404'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import './main.css'
import { Register } from './pages/Register/Register'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'

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
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/restaurant" element={<RestaurantDetails />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Link to="/summary">Summary</Link>
      <Link to="/restaurant">Restaurant</Link>
    </BrowserRouter>
  </MainApp>
)

export default App
