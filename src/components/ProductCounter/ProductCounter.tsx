import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { Button } from '../Button/Button'

interface ProductCounterProps {
  updateTotalPrice: (quantity: number) => void
}

export const ProductCounter: FC<ProductCounterProps> = ({
  updateTotalPrice,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [inputValue, setInputValue] = useState(quantity)

  const handleClick = (delta: number) => () => {
    setQuantity(Math.max(quantity + delta, 1))
  }

  const inputChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement
    setInputValue(Math.max(Number(value), 1))
  }

  useEffect(() => {
    setInputValue(quantity)
    updateTotalPrice(quantity)
  }, [quantity, updateTotalPrice])

  useEffect(() => {
    setQuantity(inputValue)
  }, [inputValue, updateTotalPrice])

  return (
    <div className="product_counter flex_centered around">
      <Button
        text="-"
        styles="counter_button"
        onClickHandler={handleClick(-1)}
      ></Button>
      <input
        className="number_input"
        type="number"
        min="1"
        placeholder={quantity.toString()}
        value={inputValue}
        onChange={inputChange}
      />
      <Button
        text="+"
        styles="counter_button"
        onClickHandler={handleClick(1)}
      ></Button>
    </div>
  )
}
