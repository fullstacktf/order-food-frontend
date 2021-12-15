import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import React from 'react'
import { AddressDetails } from './AddressDetails'
import { Title } from './Title'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div``

export const RestaurantDetails = () => {
  return (
    <Container>
      <Avatar
        sx={{ width: 68, height: 68 }}
        alt="Comiditapp Restaurant"
        src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-icono-plano-de-hamburguesa-de-comida-rapida.png"
      ></Avatar>
      <Header>
        <Title name="Calle el hambre"></Title>
        <Container>
          <Rating name="customized-5" defaultValue={2} max={5} />
          <Typography component="legend">(126 opinions)</Typography>
        </Container>
        <AddressDetails
          city="La Laguna"
          country="España"
          street="Calle El Hambre"
          postalCode={38204}
          streetNumber={12}
        ></AddressDetails>
      </Header>
    </Container>
  )
}
