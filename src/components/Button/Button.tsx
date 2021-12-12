import styled from '@emotion/styled'
import React, { FC } from 'react'

interface ButtonProps {
  onClickHandler?: () => void
  styles?: string
  text: string
}

interface InnerButtonProps {
styles?: string
}
const ButtonElement = styled.button`
${(props:InnerButtonProps) => props.styles}
`

export const Button: FC<ButtonProps> = ({ text, styles, onClickHandler }) => {
  return styles ?
    (<ButtonElement styles={ styles } onClick={onClickHandler}>{text}</ButtonElement>) : (<button onClick={onClickHandler}>{text}</button>)
  }

