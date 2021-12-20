import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Button } from '../../../../components/Button/Button'
import { useCartStore } from '../../../../contexts/StoreProvider'

/*const buttonStyle = `
  cursor: pointer;
  user-select: none;
  border: none;
  min-width: 20px;
`*/

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
`

const NumberInput = styled.input`
  margin: 5px;
  text-align: center;
  width: 40%;
  min-width: 20px;
  text-align: center;
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

interface counterProps {
  productName: string
}

export const ProductCounter: FC<counterProps> = ({ productName }) => {
  const store = useCartStore()

  const handleClick = (delta: number) => () => {
    store.incrementProduct(productName, delta)
  }

  return (
    <Container>
      <Button text="-" onClickHandler={handleClick(-1)}></Button>
      <NumberInput
        type="number"
        min="1"
        placeholder={store.productQuantity(productName)?.toString()}
      />
      <Button text="+" onClickHandler={handleClick(1)}></Button>
    </Container>
  )
}
