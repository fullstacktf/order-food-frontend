import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { LoginUser } from '../../api/auth.api'
import { FormInput } from '../../components/FormInput/FormInput'
import { Title } from '../../components/Title/Title'
import { useAuthStore } from '../../contexts/StoreProvider'

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  background-color: white;
  width: 60%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
`

const SubmitButton = styled.input`
  margin-top: 10px;
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
    store.login(user).then(() => {
      if (store.isLoggedIn) navigate('/')
    })
    // TODO: else
  }

  return (
    <Container>
      <Title name="Log into your account"></Title>
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
        <SubmitButton type="submit" />
      </Form>
    </Container>
  )
}
