import { action, computed, observable } from 'mobx'
import { LoginUser, loginUser, registerUser, User } from '../api/auth.api'

export default class AuthStore {
  @observable userToken: string | null = null

  @observable user: User | null = null

  constructor() {
    this.userToken = null
    this.user = null
  }

  @computed get isLoggedIn() {
    return !!this.user && !!this.userToken
  }

  @action login = async (values: LoginUser) => {
    try {
      const { user, token } = await loginUser(values)
      this.user = user
      this.userToken = token
    } catch (error) {
      console.log(error)
    }
  }

  @action register = async (values: User) => {
    try {
      const { user, token } = await registerUser(values)
      this.user = user
      this.userToken = token
    } catch (error) {
      console.log(error)
    }
  }

  @action logout = () => {
    // Should also clear the product basket?
    this.user = null
    this.userToken = null
  }
}
