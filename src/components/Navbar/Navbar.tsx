import styled from '@emotion/styled'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Item } from './NavbarItem/Item'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
`

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: space-around;
  box-shadow: 2px 2px 8px black;
  z-index: 1;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
`

export const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Item to="/restaurants" icon={<FastfoodIcon />}></Item>
        <Item to="/profile" icon={<AccountCircleIcon />}></Item>
        <Item to="/logout" icon={<LogoutIcon />}></Item>
      </NavbarContainer>
    </Container>
  )
}
