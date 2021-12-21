import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Navigate, Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { AllOrders } from '../../pages/AllOrders/AllOrders'
import { AllRestaurantsDetails } from '../../pages/AllRestaurantsDetails/AllRestaurantsDetails'
import { Error404 } from '../../pages/Error404'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'
import { OrderSummary } from '../../pages/OrderSummary/OrderSummary'
import { Profile } from '../../pages/Profile/Profile'
import { Register } from '../../pages/Register/Register'
import { RestaurantDetails } from '../../pages/RestaurantDetails/RestaurantDetails'
import { RestaurantProducts } from '../../pages/RestaurantProducts/RestaurantProducts'
import { Navbar } from '../Navbar/Navbar'

const MainApp = styled.div`
  display: flex;
  margin: 0;
`

const DefaultRoutes = [
  { path: '/', element: Home },
  { path: '/register', element: Register },
  { path: '/login', element: Login },
  { path: '*', element: Home },
]

const LoggedRoutes = [
  { path: '/restaurants', element: AllRestaurantsDetails },
  { path: '/restaurant', element: RestaurantDetails },
  { path: '/products', element: RestaurantProducts },
  { path: '/summary', element: OrderSummary },
  { path: '/restaurants/:id', element: RestaurantDetails },
  { path: '/orders', element: AllOrders },
  { path: '/profile', element: Profile },
  { path: '*', element: Error404 },
]

interface routerProps {
  isLogged: boolean
}

export const MainRouter: FC<routerProps> = ({ isLogged }) => {
  if (!isLogged)
    return (
      <MainApp>
        <BrowserRouter>
          <Routes>
            {DefaultRoutes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={React.createElement(route.element)}
              ></Route>
            ))}
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
            {LoggedRoutes.map((route, i) => (
              <Route
                path={route.path}
                key={i}
                element={React.createElement(route.element)}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </MainApp>
    )
}
