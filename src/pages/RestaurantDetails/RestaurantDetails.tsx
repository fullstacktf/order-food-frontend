import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/auth.api'
import { Title } from '../../components/Title/Title'
import { ProductProps } from '../../models/Product'
import { AddressDetails } from './components/AddressDetails/AddressDetails'
import { Product } from './components/Product/Product'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 95vw;
`

const ProductsContainer = styled(Container)`
  justify-content: flex-start;
  padding-top: 20px;
`

const Header = styled.div``

export interface Restaurant {
  id?: string
  role?: string
  name?: string
  email?: string
  password?: string
  phone?: number
  address?: Address[]
}

export interface Address {
  street?: string
  zipCode?: number
  country?: string
  city?: string
}

function useRestaurant(id: string | undefined) {
  const { isLoading, error, data } = useQuery<any, any, any>(
    ['restaurants', id],
    () => fetch(`${BASE_URL}restaurants/${id}`).then((res) => res.json())
  )
  return { data, isLoading, error }
}

export const RestaurantDetails = () => {
  const { id } = useParams()

  const { isLoading, error, data } = useRestaurant(id)

  if (isLoading) return <div>Loading!</div>
  else if (error) return <div>Error!</div>
  return (
    <Container>
      {console.log(data)}
      <Avatar
        sx={{ width: 68, height: 68 }}
        alt={`${data.name} image`}
        src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-icono-plano-de-hamburguesa-de-comida-rapida.png"
      ></Avatar>
      <Header>
        <Title name={data.name}></Title>
        <Container>
          <Rating name="customized-5" defaultValue={2} max={5} />
          <Typography component="legend">(126 opinions)</Typography>
        </Container>
        <AddressDetails
          city={data.address[0].city}
          country={data.address[0].country}
          street={data.address[0].street}
          zipCode={data.address[0].zipCode}
        ></AddressDetails>
        <ProductsContainer>
          {data.menu.map((p: ProductProps) => (
            <Product key={p.name} {...p} restaurantId={id || ''}></Product>
          ))}
        </ProductsContainer>
      </Header>
    </Container>
  )
}
