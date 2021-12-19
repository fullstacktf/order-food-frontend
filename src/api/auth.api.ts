import axios from 'axios'

export const BASE_URL = process.env.REACT_APP_BASE_URL || 'api.comidit.app/'

export type User = Omit<BackUser, 'address'> & Address

export type ProfileUser = { [char: string]: string | number }

export interface BackUser {
  role: string
  name: string
  email: string
  password: string
  phone: number
  address: Address[]
}

const toBackUser = (user: User): BackUser => {
  return {
    role: user.role,
    name: user.name,
    email: user.email,
    password: user.password,
    phone: +user.phone,
    address: [
      {
        street: user.street,
        streetNumber: user.streetNumber,
        country: user.country,
        zipCode: +user.zipCode,
        city: user.city,
      },
    ],
  }
}

export const toProfileUser = (user: BackUser): ProfileUser => {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
    phone: +user.phone,
    street: user.address[0].street,
    country: user.address[0].country,
    zipCode: +user.address[0].zipCode,
    city: user.address[0].city,
  }
}

export interface LoginUser {
  email: string
  password: string
}

export interface Address {
  street: string
  streetNumber: number
  country: string
  zipCode: number
  city: string
}

export const signUp = (newUser: User) => {
  console.log(toBackUser(newUser))
  axios
    .post(`${BASE_URL}auth/signup`, toBackUser(newUser))
    .then((response) => console.log(response))
}

export const updateUser = (user: User) => {
  return axios
    .put(`${BASE_URL}profile/61be554065a7a1da79d0a9ea`, toBackUser(user))
    .then((response) => response)
}

export const signIn = (user: LoginUser) => {
  axios
    .post(`${BASE_URL}auth/signin`, user)
    .then((response) => console.log(response))
}
