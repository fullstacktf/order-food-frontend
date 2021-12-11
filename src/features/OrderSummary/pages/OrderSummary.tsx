import React, { useEffect, useState } from 'react'
import { Address } from '../../../components/atoms/Address/Address'
import { Button } from '../../../components/atoms/Button/Button'
import { PaymentTotalPrice } from '../../../components/atoms/PaymentTotalPrice/PaymentTotalPrice'
import { Product } from '../../../components/molecules/Product'

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
    <div className='order_summary_container'>
      <div className="order_summary_container__child sideNav">nav</div>
      <div className="order_summary_container__child products">
        <div className="shopping_cart_header flex_centered between">
          <h2>Shopping Cart</h2>
          <h3>3 Products</h3>
        </div>
        <div className="products_holder">
          {products.map((prod, i) => <Product key={i} name={prod.name} category={prod.category} image={prod.image} price={prod.price} handleTotalPrice={updatePrice(i)}></Product>)}
        </div>
      </div>
      <div className="order_summary_container__child summary">
        <div className="shopping_cart_header flex_centered between">
          <h2>Order Summary</h2>
        </div>
        <div className="cart_summary">
          <Address street='Some street' zipcode={212121} city='Guamasa city' country='Spain' ></Address>
          <PaymentTotalPrice number_of_items={numberOfItems} total_price={parseInt(totalPrice.toFixed(2))}></PaymentTotalPrice>
          <Button text="Proceed to payment"></Button>
        </div>
      </div>
    </div>
  )
}
