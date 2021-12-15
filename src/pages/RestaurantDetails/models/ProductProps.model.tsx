import { ProductInfo } from './ProductInfo.model'

export interface ProductProps extends ProductInfo {
  category: string
  name: string
  price: number
  image?: string
}
