import styled from '@emotion/styled'
import React, { FC, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { ProductCounter } from '../ProductCounter/ProductCounter'

const ProductData = styled.div`
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
  color: red;
  width: 100%;
`

const ButtonHolder = styled.div`
  width: 4%;
`

const DeleteButtonStyle = `
  background: #f23445;
  border: 1px solid black;
  box-shadow: 2px 2px 1px black;
  padding: 5px;
  border-radius: 15px;
  :hover {
    transform: scale(1.1);
    background: #eeee;
  }
`

const ProductImage = styled.img`
  width: 10%;
`

interface ProductProps {
  name: string
  image: string
  category: string
  price: number
  handleTotalPrice: (totalPrice: number, price: number) => void
}

export const Product: FC<ProductProps> = ({
  name,
  category,
  image,
  price,
  handleTotalPrice,
}) => {
  const [totalPrice, setTotalPrice] = useState(price)
  const updateTotalPriceFun = (quantity: number) => {
    setTotalPrice(quantity * price)
  }

  useEffect(() => {
    handleTotalPrice(totalPrice, price)
  }, [totalPrice, handleTotalPrice, price])

  return (
    <div className="product_holder flex_centered around">
      <ProductImage src={image} alt={name} />
      <ProductData className="flex_centered columns">
        <ProductName>
          <strong> {name} </strong>
        </ProductName>
        <ProductCategory>
          <strong> {category} </strong>
        </ProductCategory>
      </ProductData>
      <ProductCounter updateTotalPrice={updateTotalPriceFun}></ProductCounter>
      <PricedText>Price: {price} €</PricedText>
      <PricedText>Total: {totalPrice.toFixed(2)} €</PricedText>
      <ButtonHolder className="flex_centered">
        <Button text="🗑️" styles={DeleteButtonStyle}></Button>
      </ButtonHolder>
    </div>
  )
}
