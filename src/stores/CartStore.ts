import { action, computed, makeAutoObservable, observable } from 'mobx'
import { ProductInfo } from '../models/Product'

export default class CartStore {
  @observable cartProducts: (ProductInfo & { quantity: number })[]
  @observable restaurantId: string | null

  @computed get totalPrice() {
    return this.cartProducts.reduce(
      (total, currentProd) =>
        (total += currentProd.price * currentProd.quantity),
      0
    )
  }

  @computed get numberOfItems() {
    return this.cartProducts.reduce(
      (total, currentProd) => (total += currentProd.quantity),
      0
    )
  }

  constructor() {
    makeAutoObservable(this)
    this.cartProducts = []
    this.restaurantId = null
  }

  @action addProduct(product: ProductInfo, restaurantId: string) {
    if (this.restaurantId !== null) {
      if (restaurantId !== this.restaurantId)
        // maybe change to returning error codes, so we can distinguish where it went wrong
        return false
    } else this.restaurantId = restaurantId
    const found = this.cartProducts.find((prod) => prod.name === product.name)
    if (found === undefined) {
      this.cartProducts.push({ ...product, quantity: 1 })
      return true
    } else return false
  }

  @action incrementProduct(productName: string, delta: number) {
    this.cartProducts.forEach((prod) => {
      if (prod.name === productName)
        prod.quantity = Math.max((prod.quantity += delta), 1)
    })
  }

  @computed getOrderProducts(): ProductInfo[] {
    return this.cartProducts.map((product) => {
      return {
        name: product.name,
        price: product.price,
        productId: product.productId,
        quantity: product.quantity,
      }
    })
  }

  @computed productQuantity(productName: string) {
    const found = this.cartProducts.find((prod) => prod.name === productName)
    return found?.quantity
  }

  @computed productTotal(productName: string) {
    const found = this.cartProducts.find((prod) => prod.name === productName)
    return found?.price! * found?.quantity!
  }

  @action removeProduct(productName: string) {
    this.cartProducts = this.cartProducts.filter(
      (prod) => prod.name !== productName
    )
  }
}
