import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './main.css'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Register } from './pages/Register/Register'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*"></Route>
      </Routes>
      <Link to="/summary">Summary</Link>
    </BrowserRouter>
  </div>
)

export default App
