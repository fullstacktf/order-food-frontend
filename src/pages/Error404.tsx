import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Image404 = styled.img`
  width: 60%;
  margin-bottom: 10px;
`

export const Error404 = () => {
  return (
    <Container>
      <h1>Oh No!! No food here! :(</h1>
      <Image404 src="./404.png" alt="404" />
      <Link to="/">Back home...</Link>
    </Container>
  )
}
