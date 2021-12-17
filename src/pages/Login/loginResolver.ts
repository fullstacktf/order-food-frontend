import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const loginResolver = yupResolver(yup
  .object()
  .shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  })
  .required())
