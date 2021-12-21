import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import { makeOrder } from '../../api/order.api'
import { Button } from '../../components/Button/Button'
import { useAuthStore, useCartStore } from '../../contexts/StoreProvider'
import { Address } from './components/Address/Address'
import { PaymentTotalPrice } from './components/PaymentTotalPrice/PaymentTotalPrice'
import { Product } from './components/Product/Product'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

const AllProducts = styled.div`
  width: 80%;
  padding: 45px;
  display: flex;
  flex-direction: column;
`

const CartHeader = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const OrderSummary = observer(() => {
  const userStore = useAuthStore()
  const cartStore = useCartStore()

  const order = () => {
    // todo: user should pay before making their order lol
    // todo: fix those || ''. Nasty
    if (cartStore.numberOfItems > 0)
      makeOrder(
        cartStore.getOrderProducts(),
        cartStore.restaurantId || '',
        userStore.userToken || ''
      )
  }

  return (
    <Container>
      <AllProducts>
        <CartHeader>
          <h2>Shopping Cart</h2>
          <h3>{cartStore.cartProducts.length} products</h3>
        </CartHeader>
        {cartStore.cartProducts.map((prod, i) => (
          <Product key={i} {...prod}></Product>
        ))}
      </AllProducts>
      <Summary>
        <CartHeader>
          <h2>Order Summary</h2>
        </CartHeader>
        <CartSummary>
          <Address
            street={userStore.user!.address[0].street}
            zipcode={userStore.user!.address[0].zipCode}
            city={userStore.user!.address[0].city}
            country={userStore.user!.address[0].country}
          ></Address>
          <PaymentTotalPrice
            number_of_items={cartStore.numberOfItems}
            total_price={cartStore.totalPrice}
          ></PaymentTotalPrice>
          <Button text="Proceed to payment" onClickHandler={order}></Button>
        </CartSummary>
      </Summary>
    </Container>
  )
})
