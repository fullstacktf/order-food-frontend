import styled from '@emotion/styled'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Item } from './NavbarItem/Item'
import { NavbarItem } from './NavbarItem/NavbarItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 80px;
  box-shadow: 2px 2px 8px black;
  z-index: 1;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
`

export const Navbar = () => {
  return (
    <Container>
      <FastfoodIcon />
      <Item to="/restaurants" icon={<FastfoodIcon />}></Item>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
    </Container>
  )
}
