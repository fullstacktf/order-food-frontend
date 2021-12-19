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

export const registerUser = (newUser: User) => {
  return axios
    .post(`${BASE_URL}auth/register`, toBackUser(newUser))
    .then((response) => response)
}

export const loginUser = (user: LoginUser) => {
  return axios
    .post(`${BASE_URL}auth/login`, user)
    .then((response) => response)
}

export const updateUser = (user: User, pass: string, userId: string) => {
  const reqData = { ...toBackUser(user), pass: pass }
  if(reqData.password === '') reqData.password = pass
  return axios
    .put(`${BASE_URL}profile/${userId}`, reqData)
    .then((response) => response)
}

export const logOut = () => {
  localStorage.clear()
}
