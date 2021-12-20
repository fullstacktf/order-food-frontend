import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { LoginUser } from '../../api/auth.api'
import { FormInput } from '../../components/FormInput/FormInput'
import { useAuthStore } from '../../contexts/StoreProvider'

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 60%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  })
  .required()

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const store = useAuthStore()
  const navigate = useNavigate()

  const onSubmit = (data: LoginUser) => {
    const user = { ...data }
    store.login(user)
    if (store.isLoggedIn) navigate('/')
    // TODO: else
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="email"
          errors={errors}
          register={register}
        />
        <FormInput
          type="password"
          name="password"
          errors={errors}
          register={register}
        />
        <input type="submit" />
      </Form>
    </Container>
  )
}
