import { useAuthStore } from '../../contexts/StoreProvider'

export const Logout = () => {
  const store = useAuthStore()
  store.logout()
}
