import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './main.css'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/restaurant" element={<RestaurantDetails />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*"></Route>
      </Routes>
      <Link to="/summary">Summary</Link>
      <Link to="/restaurant">Restaurant</Link>
    </BrowserRouter>
  </div>
)

export default App
