import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import Avatar from '@mui/material/Avatar'
import React from 'react'
import { useQuery } from 'react-query'
import { BASE_URL } from '../../api/auth.api'
import { Button } from '../../components/Button/Button'
import { Title } from '../../components/Title/Title'
import { useAuthStore } from '../../contexts/StoreProvider'
import { ProductInfo } from '../../models/Product'
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
`
const AddProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div``

function useProducts(id: string | undefined) {
  const { isLoading, error, data } = useQuery<any, any, any>(
    ['products', id],
    () =>
      fetch(`${BASE_URL}restaurants/${id}/products`).then((res) => res.json())
  )
  return { data, isLoading, error }
}

export const RestaurantProducts = () => {
  const userStore = useAuthStore()

  const { data, isLoading, error } = useProducts(userStore.user?.id)

  // this handler and the handlers inside product should call services to insert, modify or delete product
  const addItemHandler = () => {}

  if (isLoading) return <div>Loading...</div>
  else if (error) return <div>Error loading :(</div>
  return (
    <Container>
      <Avatar
        sx={{ width: 68, height: 68 }}
        alt="Comiditapp Restaurant"
        src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-icono-plano-de-hamburguesa-de-comida-rapida.png"
      ></Avatar>
      <Header>
        <Title name={userStore.user!.name}></Title>
        <AddProductContainer>
          <Button
            onClickHandler={addItemHandler}
            theme="black"
            icon={<AddIcon />}
          ></Button>
          <span>Add new product</span>
        </AddProductContainer>
        <ProductsContainer>
          {data.map((p: Omit<ProductInfo, 'restaurantId'>) => (
            <Product {...p}></Product>
          ))}
        </ProductsContainer>
      </Header>
    </Container>
  )
}
