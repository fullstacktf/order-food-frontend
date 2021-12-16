import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "api.comidit.app"

export type User = Omit<BackUser, "address"> & Address;

interface BackUser {
	"role"           :string,
	"name"           :string,
	"email"          :string,
	"hashedPassword" :string,
	"phone"          :number,
  "address"        :Address[],
}

const toBackUser = (user: User) => {
  return {
	"role"           :user.role,
	"name"           :user.name,
	"email"          :user.email,
	"hashedPassword" :user.hashedPassword,
	"phone"          :user.phone,
    "address": [
      user.street,
      user.streetNumber,
      user.country,
      user.postalCode,
      user.city
  ],
  }
}

export interface LoginUser {
  "email"          :string,
	"hashedPassword" :string,
}

interface Address {
  "street": string
  "streetNumber": number
  "country": string
  "postalCode": number
  "city": string
}

export const signUp = (newUser: User) => {
  axios.post(`${BASE_URL}auth/signup`, toBackUser(newUser))
    .then((response) => console.log(response))
}

export const signIn = (user: LoginUser) => {
  axios.post(`${BASE_URL}auth/signin`, user)
  .then((response) => console.log(response))
}
