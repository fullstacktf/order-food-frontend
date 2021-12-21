import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { BASE_URL } from '../../api/auth.api'
import { Title } from '../../components/Title/Title'
import { useAuthStore } from '../../contexts/StoreProvider'
import { ProductInfo } from '../../models/Product'
import { Order } from './components/Order'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 95vw;
`

const ActiveOrdersContainer = styled.div`
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 10%;
  background-color: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  border: 2px solid black;
`

const PastOrdersContainer = styled.div`
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 10%;
  background-color: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  border: 2px solid grey;
`

interface OrderModel {
  id: string
  restaurantId: string
  status: string
  totalPrice: number
  products: ProductInfo[]
}

function useOrders(token: string | null) {
  const { isLoading, error, data } = useQuery<any, any, any>(
    ['orders', token],
    () =>
      fetch(`${BASE_URL}profile/orders?token=${token}`).then((res) =>
        res.json()
      )
  )
  return { data, isLoading, error }
}

export const AllOrders = () => {
  const store = useAuthStore()

  const { data, isLoading, error } = useOrders(store.userToken)

  if (isLoading) return <div>Loading!</div>
  else if (error) return <div>Error loading...</div>
  else {
    const activeOrders = data.filter(
      (order: OrderModel) => order.status !== 'complete'
    )
    const pastOrders = data.filter(
      (order: OrderModel) => order.status === 'complete'
    )
    return (
      <Container>
        <Title name="Active Orders"></Title>
        <ActiveOrdersContainer>
          {activeOrders.map((order: OrderModel, index: number) => {
            return (
              <Order
                key={index}
                restaurantId={order.restaurantId}
                totalPrice={order.totalPrice}
                orderStatus={order.status}
              ></Order>
            )
          })}
        </ActiveOrdersContainer>
        <Title name="Past Orders"></Title>
        <PastOrdersContainer>
          {pastOrders.map((order: OrderModel, index: number) => (
            <Order
              key={index}
              restaurantId={order.restaurantId}
              totalPrice={order.totalPrice}
              orderStatus={order.status}
            ></Order>
          ))}
        </PastOrdersContainer>
      </Container>
    )
  }
}
