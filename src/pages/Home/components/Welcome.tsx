import styled from '@emotion/styled'
import React from 'react'
import { Card } from './Card'

const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  width: 75vw;
  align-items: flex-start;
  justify-content: center;
`

export const Welcome = () => {
  return (
    <Container>
      <Card></Card>
    </Container>
  )
}
