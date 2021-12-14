import axios from "axios";


const BASE_URL = process.env.BASE_URL

export interface User {
	"role"           :string,
	"name"           :string,
	"email"          :string,
	"hashedPassword" :string,
	"phone"          :number,
  "address"        :Address[],
}

export interface Address {
  "street": string
  "streetNumber": number
  "country": string
  "postalCode": number
  "city": string
}

export const signUp = async (newUser: User) => {
  axios.post(`${BASE_URL}/auth/signup`, newUser)
    .then(function (response) {
      console.log(response);
    });
}
