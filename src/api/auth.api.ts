import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "api.comidit.app"

export interface User {
	"role"           :string,
	"name"           :string,
	"email"          :string,
	"hashedPassword" :string,
	"phone"          :number,
  "address"        :Address[],
}

export interface LoginUser {
  "email"          :string,
	"hashedPassword" :string,
}

export interface Address {
  "street": string
  "streetNumber": number
  "country": string
  "postalCode": number
  "city": string
}

export const signUp = (newUser: User) => {
  axios.post(`${BASE_URL}auth/signup`, newUser)
    .then((response) => console.log(response))
}

export const signIn = (user: LoginUser) => {
  axios.post(`${BASE_URL}auth/signin`, user)
  .then((response) => console.log(response))
}
