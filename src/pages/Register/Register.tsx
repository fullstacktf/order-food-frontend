import styled from '@emotion/styled'
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signUp, User } from '../../api/auth.api'
import { registerResolver } from './registerResolver'
import { FormInput } from '../../components/FormInput/FormInput'

interface FormColumnData {
  name: string
  type: string
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

const Selector = styled(Select)`
  width: 100%;
`

const leftColumn: FormColumnData[] = [
  { name: 'email', type: 'text' },
  { name: 'name', type: 'text' },
  { name: 'password', type: 'password' },
  { name: 'phone', type: 'number' },
]

const rightColumn: FormColumnData[] = [
  { name: 'street', type: 'text' },
  { name: 'streetNumber', type: 'text' },
  { name: 'city', type: 'text' },
  { name: 'country', type: 'text' },
  { name: 'postalCode', type: 'number' },
]

export const Register = () => {
  const [role, setRole] = useState('user')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: registerResolver,
  })

  const onSubmit = (data: User) => {
    signUp(data)
  }

  const handleOnChange = (event: SelectChangeEvent<unknown>) => {
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
            <Selector value={role} label="Role" onChange={handleOnChange}>
              <MenuItem value={'user'}>user</MenuItem>
              <MenuItem value={'restaurant'}>restaurant</MenuItem>
            </Selector>
            {leftColumn.map(function (value, i) {
              return (
                <FormInput
                  type={value.type}
                  name={value.name}
                  errors={errors}
                  register={register}
                  key={i}
                />
              )
            })}
          </Column>
          <LeftColumn>
            {rightColumn.map(function (value, i) {
              return (
                <FormInput
                  type={value.type}
                  name={value.name}
                  errors={errors}
                  register={register}
                  key={i}
                />
              )
            })}
          </LeftColumn>
        </InnerContainer>
        <input type="submit" />
      </Form>
    </Container>
  )
}
