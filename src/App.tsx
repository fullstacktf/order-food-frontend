import styled from '@emotion/styled'
import React from 'react'
import { Navigate, Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import './index.css'
import { AllRestaurantsDetails } from './pages/AllRestaurantsDetails/AllRestaurantsDetails'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Register } from './pages/Register/Register'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'
import { RestaurantProducts } from './pages/RestaurantProducts/RestaurantProducts'

const MainApp = styled.div`
  display: flex;
  margin: 0;
  background: linear-gradient(130deg, #cccccc 66%, #16202c 30%);
`

const LOGGEDIN = true
const App = () => {
  if (!LOGGEDIN)
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
            <Route path="/" element={<Navigate to="/restaurants" />}></Route>
            <Route
              path="/restaurants"
              element={<AllRestaurantsDetails />}
            ></Route>
            <Route path="/restaurant" element={<RestaurantDetails />}></Route>
            <Route path="/products" element={<RestaurantProducts />}></Route>
            <Route path="/summary" element={<OrderSummary />}></Route>
            <Route
              path="/restaurants/:id"
              element={<RestaurantDetails />}
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </BrowserRouter>
      </MainApp>
    )
}

export default App
