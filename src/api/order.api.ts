import axios from 'axios'
import { ProductInfo } from '../models/Product'
import { BASE_URL } from './auth.api'

export const makeOrder = (
  products: ProductInfo[],
  restaurantId: string,
  token: string
) => {
  const reqData = {
    products,
    token,
  }
  return axios
    .post(`${BASE_URL}restaurants/${restaurantId}/orders`, reqData)
    .then((response) => response)
}
