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
import { Logout } from './components/Logout/Logout'
import { OrderSummary } from './pages/OrderSummary/OrderSummary'
import { Profile } from './pages/Profile/Profile'
import { Register } from './pages/Register/Register'
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails'
import { RestaurantProducts } from './pages/RestaurantProducts/RestaurantProducts'

const MainApp = styled.div`
  display: flex;
  margin: 0;
  background: linear-gradient(130deg, #cccccc 66%, #16202c 30%);
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
  { path: '/profile', element: Profile },
  { path: '/logout', element: Logout },
  { path: '*', element: Error404 },
]

const App = () => {
  if (!localStorage.getItem('token'))
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

export default App
