export interface ProductInfo {
  category: string
  name: string
  price: number
}

export interface ProductProps extends ProductInfo {
  category: string
  name: string
  price: number
  image?: string
}
