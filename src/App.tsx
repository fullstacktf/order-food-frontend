import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { MainRouter } from './components/MainRouter/MainRouter'
import { useAuthStore } from './contexts/StoreProvider'
import './index.css'

const App = observer(() => {
  const authStore = useAuthStore()
  useEffect(() => {
    document.title = 'comidit.app'
  }, [])
  return <MainRouter isLogged={authStore.isLoggedIn}></MainRouter>
})

export default App
