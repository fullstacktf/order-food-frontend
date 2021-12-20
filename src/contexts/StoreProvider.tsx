import { useLocalStore } from 'mobx-react'
import { createContext, FC, useContext } from 'react'
import AuthStore from '../stores/AuthStore'
import { RootStore } from '../stores/RootStore'

export interface StoreContextProps {
  authStore: AuthStore
}

export const StoreContext = createContext<StoreContextProps | null>(null)

const createStores = () => (): StoreContextProps => {
  const rootStore = new RootStore()
  return {
    authStore: rootStore.authStore,
  }
}

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(createStores())
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStoreContext = (): StoreContextProps => {
  const store = useContext(StoreContext)
  if (!store)
    throw new Error('useStoreContext must be used within a StoreProvider')
  return store
}

export const useAuthStore = (): AuthStore => useStoreContext().authStore
