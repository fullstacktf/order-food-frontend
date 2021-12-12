import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Address } from '../../components/Address/Address'
import { Button } from '../../components/Button/Button'
import { PaymentTotalPrice } from '../../components/PaymentTotalPrice/PaymentTotalPrice'
import { Product } from '../../components/Product/Product'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const AllProducts = styled.div`
  padding: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CartHeader = styled.div`
  border-bottom: 1px solid gray;
`

const Summary = styled.div`
  padding: 45px;
  display: flex;
  flex-direction: column;
  width: 25%;
  background: #f5f5f6;
`

const CartSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// This should come from localStorage
const products = [
  {
    name: "bulbasu",
    category: "videogames",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    price: 45.2
  },
  {
    name: "bulbaso number chu",
    category: "videogames",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    price: 45.2
  },
  {
    name: "bulbaso number tri",
    category: "videogames",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    price: 45.2
  },
]

export const OrderSummary = () => {
  const [allProducts, setallProducts] = useState(new Array(products.length))
  const [totalPrice, setTotalPrice] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(0)

  const updatePrice = (i:number) => (totalPrice:number, price:number) => {
    const auxPrices = allProducts
    auxPrices[i] = {
      quantity: +(totalPrice / price).toFixed(0),
      price: totalPrice
    }
    setallProducts(auxPrices)
    updateResults()
  }

  const updateResults = () => {
    setTotalPrice(allProducts.reduce((total, product) => total + product.price, 0));
    setNumberOfItems(allProducts.reduce((total, product) => total + product.quantity, 0));
  }


  return (
    <Container>
      <AllProducts>
        <CartHeader className="flex_centered between">
          <h2>Shopping Cart</h2>
          <h3>3 Products</h3>
        </CartHeader>
          {products.map((prod, i) => <Product key={i} {...prod} handleTotalPrice={updatePrice(i)}></Product>)}
      </AllProducts>
      <Summary>
        <CartHeader className="flex_centered between">
          <h2>Order Summary</h2>
        </CartHeader>
        <CartSummary>
          <Address street='Some street' zipcode={212121} city='Guamasa city' country='Spain' ></Address>
          <PaymentTotalPrice number_of_items={numberOfItems} total_price={parseInt(totalPrice.toFixed(2))}></PaymentTotalPrice>
          <Button text="Proceed to payment"></Button>
        </CartSummary>
      </Summary>
    </Container>
  )
}
