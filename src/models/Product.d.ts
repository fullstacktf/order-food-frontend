export interface ProductInfo {
  productId: string
  category?: string
  quantity?: number
  name: string
  price: number
}

export interface ProductProps extends ProductInfo {
  category?: string
  name: string
  price: number
  restaurantId: string
  image?: string
}
