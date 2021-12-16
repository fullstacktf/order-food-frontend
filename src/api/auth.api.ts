import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "api.comidit.app"

export type User = Omit<BackUser, "address"> & Address;

interface BackUser {
	"role"           :string,
	"name"           :string,
	"email"          :string,
	"password"       :string,
	"phone"          :number,
  "address"        :Address[],
}

const toBackUser = (user: User): BackUser => {
  return {
	"role"            :user.role,
	"name"            :user.name,
	"email"           :user.email,
	"password"        :user.password,
	"phone"           :+user.phone,
    "address": [{
      "street"      :user.street,
      "streetNumber":user.streetNumber,
      "country"     :user.country,
      "zipCode"  :+user.zipCode,
      "city"        :user.city
    }],
  }
}

export interface LoginUser {
  "email"          :string,
	"password" :string,
}

interface Address {
  "street": string
  "streetNumber": number
  "country": string
  "zipCode": number
  "city": string
}

export const signUp = (newUser: User) => {
  console.log(toBackUser(newUser))
  axios.post(`${BASE_URL}auth/signup`, toBackUser(newUser))
    .then((response) => console.log(response))
}

export const signIn = (user: LoginUser) => {
  axios.post(`${BASE_URL}auth/signin`, user)
  .then((response) => console.log(response))
}
