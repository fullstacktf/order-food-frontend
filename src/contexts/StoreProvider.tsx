import { useLocalObservable } from 'mobx-react'
import { createContext, FC, useContext } from 'react'
import AuthStore from '../stores/AuthStore'
import CartStore from '../stores/CartStore'
import { RootStore } from '../stores/RootStore'

export interface StoreContextProps {
  authStore: AuthStore
  cartStore: CartStore
}

export const StoreContext = createContext<StoreContextProps | null>(null)

const createStores = () => (): StoreContextProps => {
  const rootStore = new RootStore()
  return {
    authStore: rootStore.authStore,
    cartStore: rootStore.cartStore,
  }
}

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalObservable(createStores())
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStoreContext = (): StoreContextProps => {
  const store = useContext(StoreContext)
  if (!store)
    throw new Error('useStoreContext must be used within a StoreProvider')
  return store
}

export const useAuthStore = (): AuthStore => useStoreContext().authStore
export const useCartStore = (): CartStore => useStoreContext().cartStore
