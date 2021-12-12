import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavbarItemProps {
  icon: string,
  to: string
}

interface ButtonProps {
  icon: string,
  to: string
}

const Button = styled.button`
  background: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
  background-image: url(${(props: ButtonProps) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px;
`

export const NavbarItem: FC<NavbarItemProps> = ({ icon, to }) => {
  return (
    <Button as={ Link } to={ to } icon={ icon }>
    </Button>
  )
}
