import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormInput } from '../../components/FormInput/FormInput'
import { LoginUser, signIn } from '../../api/auth.api'

interface FormData {
  email: string
  password: string
}

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

const TextFieldStyled = styled(TextField)`
  width: 100%;
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
  const onSubmit = (data: LoginUser) => {
    const user = { ...data }
    signIn(user)
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
          name="hashedPassword"
          errors={errors}
          register={register}
        />
        <input type="submit" />
      </Form>
    </Container>
  )
}
