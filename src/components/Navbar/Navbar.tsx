import styled from '@emotion/styled'
import { NavbarItem } from '../NavbarItem/NavbarItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 10%;
  border-right: 2px solid black;
`

export const Navbar = () => {
  return (
    <Container>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
      <NavbarItem icon="./assets/home.svg" to="/"></NavbarItem>
    </Container>
  )
}
