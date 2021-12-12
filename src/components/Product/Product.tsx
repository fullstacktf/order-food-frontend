import React, { FC, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { ProductCounter } from '../ProductCounter/ProductCounter'

interface ProductProps {
  name: string
  image: string
  category: string
  price: number
  handleTotalPrice: (totalPrice: number, price: number) => void
}

export const Product: FC<ProductProps> = ({ name, category, image, price, handleTotalPrice }) => {
  const [totalPrice, setTotalPrice] = useState(price)
  const updateTotalPriceFun = (quantity: number) => {
    setTotalPrice(quantity * price);
  }

  useEffect(() => {
    handleTotalPrice(totalPrice, price);
  }, [totalPrice, handleTotalPrice, price])

  return (
    <div className="product_holder flex_centered around">
      <img src={image} alt={name} />
      <div className="product_data flex_centered columns">
        <p className='product_name'><strong> {name} </strong></p>
        <p className='product_category'><strong> {category} </strong></p>
      </div>
      <ProductCounter updateTotalPrice={updateTotalPriceFun}></ProductCounter>
      <p>Price: {price} €</p>
      <p>Total: {totalPrice.toFixed(2)} €</p>
      <div className="button_holder flex_centered">
      <Button text="🗑️" styles="delete_btn"></Button>
      </div>
    </div >
  )
}
