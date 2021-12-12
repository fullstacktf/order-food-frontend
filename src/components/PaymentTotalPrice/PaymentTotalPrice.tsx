import React, { FC } from 'react'

interface PaymentTotalPriceProps {
  number_of_items: number
  total_price: number
}

export const PaymentTotalPrice: FC<PaymentTotalPriceProps> = ({number_of_items, total_price}) => {
  return (
    <div className='flex_centered start columns'>
      <span><strong>Total Price ({number_of_items} items)</strong></span>
      <h3 className='payment_price_value'> {total_price.toFixed(2)} €</h3>
    </div>
  )
}
