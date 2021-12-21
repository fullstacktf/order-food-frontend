import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { BASE_URL } from '../../../api/auth.api'
import { useAuthStore } from '../../../contexts/StoreProvider'

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;
  margin: 2%;
  border: 2px solid black;
  border-radius: 20px;
  background: #cccccc;
`

const OrderData = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const OrderPrice = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`

interface OrderProps {
  restaurantId: string
  totalPrice: number
  orderStatus: string
}

function useRestaurant(id: string | null) {
  const { isLoading, error, data } = useQuery<any, any, any>(
    ['restaurantName', id],
    () => fetch(`${BASE_URL}restaurants/${id}`).then((res) => res.json())
  )
  return { data, isLoading, error }
}

export const Order: FC<OrderProps> = ({
  restaurantId,
  totalPrice,
  orderStatus,
}) => {
  const store = useAuthStore()

  const { isLoading, error, data } = useRestaurant(restaurantId)

  if (isLoading) return <div>Loading!</div>
  if (error) return <div>Error loading....</div>
  return (
    <OrderContainer>
      <OrderData>
        <p>Restaurante: {data.name}</p>
        <p>Dirección: {store.user?.address[0].street}</p>
      </OrderData>
      <OrderPrice>
        <p>Total: {totalPrice}$</p>
        <p>Estado: {orderStatus}</p>
      </OrderPrice>
    </OrderContainer>
  )
}
