import styled from '@emotion/styled'
import React, { FC } from 'react'

interface PaymentTotalPriceProps {
  number_of_items: number
  total_price: number
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const PaymentTotalPrice: FC<PaymentTotalPriceProps> = ({
  number_of_items,
  total_price,
}) => {
  return (
    <Container>
      <span>
        <strong>Total Price ({number_of_items} items)</strong>
      </span>
      <h3> {total_price.toFixed(2)} €</h3>
    </Container>
  )
}
