import styled from '@emotion/styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArticleIcon from '@mui/icons-material/Article'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { useAuthStore } from '../../contexts/StoreProvider'
import { Item } from './NavbarItem/Item'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 5vw;
  min-width: 5vw;
`

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: space-around;
  box-shadow: 2px 2px 8px black;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
`

export const Navbar = () => {
  const authStore = useAuthStore()

  const logout = () => {
    authStore.logout()
  }

  if (authStore.user?.role === 'client')
    return (
      <Container>
        <NavbarContainer>
          <Item to="/restaurants" icon={<FastfoodIcon />}></Item>
          <Item to="/profile" icon={<AccountCircleIcon />}></Item>
          <Item to="/summary" icon={<ShoppingCart />}></Item>
          <Item to="/orders" icon={<ArticleIcon />}></Item>
          <Item to="/" icon={<LogoutIcon />} handler={logout}></Item>
        </NavbarContainer>
      </Container>
    )
  else
    return (
      <Container>
        <NavbarContainer>
          <Item to="/restaurants" icon={<FastfoodIcon />}></Item>
          <Item to="/profile" icon={<AccountCircleIcon />}></Item>
          <Item to="/summary" icon={<ShoppingCart />}></Item>
          <Item to="/orders" icon={<ArticleIcon />}></Item>
          <Item to="/products" icon={<HourglassTopIcon />}></Item>
          <Item to="/" icon={<LogoutIcon />} handler={logout}></Item>
        </NavbarContainer>
      </Container>
    )
}
