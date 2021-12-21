import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import Avatar from '@mui/material/Avatar'
import React from 'react'
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
  padding: 20px;
`
const AddProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div``

const products: ProductInfo[] = [
  {
    productId: '1',
    category: 'mainCourse',
    name: 'Bocadillo Clásico Embutidos',
    price: 1.4,
  },
  {
    productId: '2',
    category: 'mainCourse',
    name: 'Perrito Especial Mexicano',
    price: 3.0,
  },
  {
    productId: '3',
    category: 'appetizer',
    name: 'Ensaladilla',
    price: 42342.2,
  },
  {
    productId: '4',
    category: 'appetizer',
    name: 'Bolitas de coco',
    price: 4.2,
  },
]

export const RestaurantProducts = () => {
  const userStore = useAuthStore()

  // this handler and the handlers inside product should call services to insert, modify or delete product
  const addItemHandler = () => {}

  return (
    <Container>
      <Avatar
        sx={{ width: 68, height: 68 }}
        alt="Comiditapp Restaurant"
        src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-icono-plano-de-hamburguesa-de-comida-rapida.png"
      ></Avatar>
      <Header>
        <Title name="Calle el hambre Products"></Title>
        <AddProductContainer>
          <Button
            onClickHandler={addItemHandler}
            theme="black"
            icon={<AddIcon />}
          ></Button>
          <span>Add new product</span>
        </AddProductContainer>
        <ProductsContainer>
          {products.map((p) => (
            // should probably use a different component?
            <Product {...p} restaurantId={userStore.user!.id || ''}></Product>
          ))}
        </ProductsContainer>
      </Header>
    </Container>
  )
}
