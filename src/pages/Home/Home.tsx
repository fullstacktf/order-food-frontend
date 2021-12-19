import styled from '@emotion/styled'
import React from 'react'
import { Welcome } from './components/Welcome'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('./home.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
`

export const Home = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  )
}
