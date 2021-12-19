import React from 'react'
import { Navigate } from 'react-router-dom'
import { logOut } from '../../api/auth.api'

export const Logout = () => {
  logOut()
  return <Navigate to="/" />
}
