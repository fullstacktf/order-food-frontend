import styled from '@emotion/styled'
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Address, signUp, User } from '../../api/auth.api'

interface FormData {
  role: string
  name: string
  email: string
  hashedPassword: string
  phone: number
  street: string
  country: string
  postalCode: number
  city: string
  streetNumber: number
}

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Column = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  margin: 5px;
`

// Ew. Find another solution to this!
const LeftColumn = styled(Column)`
  padding-top: 13px;
`

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
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

const Selector = styled(Select)`
  width: 100%;
`

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Name is a required field'),
    email: yup.string().email().required('Email is a required field'),
    phone: yup
      .string()
      .matches(
        RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/),
        'Invalid phone number'
      ),
    hashedPassword: yup.string().required('Password is a required field'),
    street: yup.string().required('Street is a required field'),
    streetNumber: yup.string().required('Street Number is a required field'),
    city: yup.string().required('City is a required field'),
    country: yup.string().required('Country is a required field'),
    postalCode: yup.string().required('Postal Code is a required field'),
  })
  .required()

export const Register = () => {
  const [role, setRole] = useState('user')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => {
    const newUser: User = {
      role: data.role,
      name: data.name,
      email: data.email,
      hashedPassword: data.hashedPassword,
      phone: data.phone,
      address: [
        {
          city: data.city,
          country: data.country,
          postalCode: data.postalCode,
          street: data.street,
          streetNumber: data.streetNumber,
        },
      ],
    }
    console.log(newUser)
    signUp(newUser)
  }

  const handleOnChange = (event: SelectChangeEvent<unknown>) => {
    console.log(errors)
    const value = event.target.value as string
    setRole(value)
    setValue('role', role)
  }

  setValue('role', role)

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InnerContainer>
          <Column>
            <InputLabel>Role</InputLabel>
            <Selector
              labelId="role-select-label"
              value={role}
              label="Role"
              onChange={handleOnChange}
            >
              <MenuItem value={'user'}>user</MenuItem>
              <MenuItem value={'restaurant'}>restaurant</MenuItem>
            </Selector>
            <TextFieldStyled
              error={errors.name}
              helperText={errors.name?.message}
              label="Name"
              variant="outlined"
              {...register('name')}
            />
            <TextFieldStyled
              error={errors.email}
              helperText={errors.email?.message}
              label="Email"
              variant="outlined"
              {...register('email')}
            />
            <TextFieldStyled
              error={errors.hashedPassword}
              helperText={errors.hashedPassword?.message}
              label="Password"
              type="password"
              variant="outlined"
              {...register('hashedPassword')}
            />
            <TextFieldStyled
              error={errors.phone}
              helperText={errors.phone?.message}
              label="Phone"
              variant="outlined"
              type="number"
              {...register('phone')}
            />
          </Column>
          <LeftColumn>
            <TextFieldStyled
              error={errors.street}
              helperText={errors.street?.message}
              label="Street"
              variant="outlined"
              {...register('street')}
            />
            <TextFieldStyled
              error={errors.streetNumber}
              helperText={errors.streetNumber?.message}
              label="Street Number"
              variant="outlined"
              {...register('streetNumber')}
            />
            <TextFieldStyled
              error={errors.city}
              helperText={errors.city?.message}
              label="City"
              variant="outlined"
              {...register('city')}
            />
            <TextFieldStyled
              error={errors.country}
              helperText={errors.country?.message}
              label="Country"
              variant="outlined"
              {...register('country')}
            />
            <TextFieldStyled
              error={errors.postalCode}
              helperText={errors.postalCode?.message}
              label="Postal Code"
              variant="outlined"
              type="number"
              {...register('postalCode')}
            />
          </LeftColumn>
        </InnerContainer>
        <input type="submit" />
      </Form>
    </Container>
  )
}
