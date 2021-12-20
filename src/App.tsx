import { observer } from 'mobx-react'
import { MainRouter } from './components/MainRouter/MainRouter'
import { useAuthStore } from './contexts/StoreProvider'
import './index.css'

const App = observer(() => {
  const authStore = useAuthStore()

  return <MainRouter isLogged={authStore.isLoggedIn}></MainRouter>
})

export default App
