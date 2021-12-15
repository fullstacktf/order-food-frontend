import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import './main.css'
import { Error404 } from './pages/Error404'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
