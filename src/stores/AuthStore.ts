import { action, computed, makeAutoObservable, observable } from 'mobx'
import {
  BackUser,
  LoginUser,
  loginUser,
  registerUser,
  updateUser,
  User,
} from '../api/auth.api'

export default class AuthStore {
  @observable userToken: string | null = null

  @observable user: (BackUser & { id: string }) | null = null

  constructor() {
    makeAutoObservable(this)
    const user = localStorage.getItem('user')
    const userToken = localStorage.getItem('userToken')
    if (user) {
      this.user = JSON.parse(user)
    } else this.user = null
    if (userToken) {
      this.userToken = userToken
    } else this.userToken = null
  }

  @computed get isLoggedIn() {
    return !!this.user && !!this.userToken
  }

  @action login = async (values: LoginUser) => {
    try {
      const { user, token } = await loginUser(values)
      this.user = user
      this.userToken = token
      this.storeCredentials()
    } catch (error) {
      console.log(error)
    }
  }

  @action register = async (values: User) => {
    try {
      const { user, token } = await registerUser(values)
      this.user = user
      this.userToken = token
      this.storeCredentials()
    } catch (error) {
      console.log(error)
    }
  }

  @action storeCredentials() {
    localStorage.setItem('user', JSON.stringify(this.user!))
    localStorage.setItem('userToken', this.userToken!)
  }

  @action update = async (values: User, pass: string, userId: string) => {
    try {
      const { user } = await updateUser(values, pass, userId, this.userToken!)
      this.user = user
    } catch (error) {
      console.log(error)
    }
  }

  @action logout = () => {
    // Should also clear the product basket?
    localStorage.removeItem('user')
    localStorage.removeItem('userToken')
    this.user = null
    this.userToken = null
  }
}
