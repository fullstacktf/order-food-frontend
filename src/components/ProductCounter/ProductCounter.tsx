import styled from '@emotion/styled';
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { Button } from '../Button/Button';

interface ProductCounterProps {
  updateTotalPrice: (quantity: number) => void
}

const buttonStyle = `
  cursor: pointer;
  user-select: none;
  border: none;
  min-width: 20px;
`

const Container = styled.div`
  width: 10%;
`

const NumberInput = styled.input`
  margin: 5px;
  text-align: center;
  width: 40%;
  min-width: 20px;
  text-align: center;
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
  }
  ::-webkit-outer-spin-button{
      -webkit-appearance: none;
      margin: 0;
  }
`

export const ProductCounter: FC<ProductCounterProps> = ({ updateTotalPrice }) => {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(quantity);

  const handleClick = (delta: number) => () => {
    setQuantity(Math.max(quantity + delta, 1));
  }

  const inputChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setInputValue(Math.max(Number(value), 1));
  }

  useEffect(() => {
    setInputValue(quantity);
    updateTotalPrice(quantity);
  }, [quantity, updateTotalPrice]);

  useEffect(() => {
    setQuantity(inputValue);
  }, [inputValue, updateTotalPrice])

  return (
    <Container className='flex_centered around'>
      <Button text="-" styles={ buttonStyle } onClickHandler={handleClick(-1)}></Button>
      <NumberInput type="number" min="1" placeholder={quantity.toString()} value={inputValue} onChange={inputChange} />
      <Button text="+" styles={ buttonStyle } onClickHandler={handleClick(1)}></Button>
    </Container>
  )
}
