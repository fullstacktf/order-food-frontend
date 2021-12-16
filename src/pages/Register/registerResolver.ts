import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const registerResolver = yupResolver(yup
  .object()
  .shape({
    name: yup.string().required('Name is a required field'),
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
    phone: yup
      .string()
      .matches(
        RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/),
        'Invalid phone number'
    ),
    street: yup.string().required('Street is a required field'),
    streetNumber: yup.string().required('Street Number is a required field'),
    city: yup.string().required('City is a required field'),
    country: yup.string().required('Country is a required field'),
    postalCode: yup.string().required('Postal Code is a required field'),
  })
  .required())
