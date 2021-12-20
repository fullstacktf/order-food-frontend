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
  margin-left: 3%;
  background-color: #eeecee;
  padding: 5px;
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
      <ButtonContainer>
        <Button
          theme="black"
          text="Register"
          onClickHandler={() => navigate('/register')}
        />
        <Button
          theme="black"
          text="Login"
          onClickHandler={() => navigate('/login')}
        />
      </ButtonContainer>
    </StyledCard>
  )
}
