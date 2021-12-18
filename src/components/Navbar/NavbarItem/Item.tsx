import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ItemProps {
  icon: any
  to: string
}

interface ButtonProps {
  to: string
  color: string
}

const Button = styled.button`
  background: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
  color: (${(props: ButtonProps) => props.color});
  width: 30px;
  height: 30px;
`

export const Item: FC<ItemProps> = ({ icon, to }) => {
  return (
    <Button as={Link} to={to} color="black">
      {icon}
    </Button>
  )
}
