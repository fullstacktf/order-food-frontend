import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Button } from '../../../../components/Button/Button'
import { useCartStore } from '../../../../contexts/StoreProvider'
import { ProductCounter } from '../ProductCounter/ProductCounter'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ProductData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 16.67%;
`

const PricedText = styled.p`
  text-align: center;
  width: 16.67%;
`

const ProductName = styled.p`
  margin: 5px;
  width: 100%;
`

const ProductCategory = styled.p`
  color: black;
  width: 100%;
`

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4%;
`

const ProductImage = styled.img`
  width: 10%;
`

interface ProductProps {
  name: string
  image?: string
  category?: string
  price: number
}

export const Product: FC<ProductProps> = ({ name, category, image, price }) => {
  const cartStore = useCartStore()

  const handleDelete = () => {
    cartStore.removeProduct(name)
  }

  return (
    <Container>
      <ProductImage src={image} alt={name} />
      <ProductData>
        <ProductName>
          <strong> {name} </strong>
        </ProductName>
        <ProductCategory>
          <strong> {category} </strong>
        </ProductCategory>
      </ProductData>
      <ProductCounter productName={name}></ProductCounter>
      <PricedText>Price: {price} €</PricedText>
      <PricedText>
        Total: {cartStore.productTotal(name).toFixed(2)} €
      </PricedText>
      <ButtonHolder>
        <Button text="🗑️" onClickHandler={handleDelete}></Button>
      </ButtonHolder>
    </Container>
  )
}
