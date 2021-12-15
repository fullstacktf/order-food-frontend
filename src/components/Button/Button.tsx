import styled from '@emotion/styled'
import React, { FC } from 'react'

interface ButtonProps {
  onClickHandler?: () => void
  theme?: string
  icon?: any
  text?: string
}

const StyledButton = styled.button`
  max-width: fit-content;
  :active {
    transform: translateY(2px);
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props: any) => props.theme};
  border: 1px solid ${(props: any) => props.theme};
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonContent = styled.span`
  margin: 5px;
`

export const Button: FC<ButtonProps> = ({
  icon,
  theme = 'cyan',
  onClickHandler,
  text,
}) => {
  return (
    <StyledButton theme={theme} onClick={onClickHandler}>
      {icon && <ButtonContent>{icon}</ButtonContent>}
      {text && <ButtonContent>{text}</ButtonContent>}
    </StyledButton>
  )
}
