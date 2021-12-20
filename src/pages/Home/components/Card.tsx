import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { Title } from '../../../components/Title/Title'

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  background: linear-gradient(145deg, #eeeaea 65%, #bbb7b7 45%);
  padding: 1em;
  border: 2px solid black;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = () => {
  const navigate = useNavigate()
  return (
    <StyledCard>
      <Title name="¿Tienes hambrita?" />
      <h2>Entra ya</h2>
      <ButtonContainer>
        <Button
          theme="dark grey"
          text="Register"
          onClickHandler={() => navigate('/register')}
        />
        <Button
          theme="dark grey"
          text="Login"
          onClickHandler={() => navigate('/login')}
        />
      </ButtonContainer>
    </StyledCard>
  )
}
