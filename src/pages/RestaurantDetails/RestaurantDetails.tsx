import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import React from 'react'
import { AddressDetails } from './AddressDetails/AddressDetails'
import { ProductInfo } from './models/ProductInfo.model'
import { Product } from './Product/Product'
import { Title } from './Title/Title'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
`

const ProductsContainer = styled(Container)`
  justify-content: flex-start;
  padding: 20px;
`

const Header = styled.div``

const products: ProductInfo[] = [
  {
    category: 'mainCourse',
    name: 'Bocadillo Clásico Embutidos',
    price: 1.4,
  },
  {
    category: 'mainCourse',
    name: 'Perrito Especial Mexicano',
    price: 3.0,
  },
  {
    category: 'appetizer',
    name: 'Ensaladilla',
    price: 42342.2,
  },
  {
    category: 'appetizer',
    name: 'Bolitas de coco',
    price: 4.2,
  },
]

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
        <ProductsContainer>
          {products.map((p) => (
            <Product {...p}></Product>
          ))}
        </ProductsContainer>
      </Header>
    </Container>
  )
}
