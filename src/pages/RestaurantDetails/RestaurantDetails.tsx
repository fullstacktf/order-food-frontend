import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/auth.api'
import { Title } from '../../components/Title/Title'
import { AddressDetails } from './components/AddressDetails/AddressDetails'
import { Product } from './components/Product/Product'
import { ProductInfo } from './models/Product'

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
  padding-top: 20px;
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
    () => {
      fetch(`${BASE_URL}restaurants/${id}`).then((res) => res.json())
    }
  )

  return { data, isLoading, error }
}

export const RestaurantDetails = () => {
  const { id } = useParams()

  const { isLoading, error, data } = useRestaurant(id)
  // const [user, setUser] = useState({} as any)

  useEffect(() => {
    console.log('cositas peludas:', { id, data })
    // setUser({ data })
  }, [id, data])

  if (isLoading) return <div>Loading!</div>
  else if (error) return <div>Error!</div>
  return (
    <Container>
      {console.log('data dentro del componente: ', data)}
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
          city="Some city"
          country="España"
          street="Calle El Hambre"
          zipCode={38204}
          streetNumber={12}
        ></AddressDetails>
        <ProductsContainer>
          {products.map((p) => (
            <Product key={p.name} {...p}></Product>
          ))}
        </ProductsContainer>
      </Header>
    </Container>
  )
}
