import styled from '@emotion/styled'
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { User } from '../../api/auth.api'
import { FormInput } from '../../components/FormInput/FormInput'
import { Title } from '../../components/Title/Title'
import { useAuthStore } from '../../contexts/StoreProvider'
import { registerResolver } from './registerResolver'

interface FormColumnData {
  name: string
  type: string
}

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  { name: 'zipCode', type: 'number' },
]

export const Register = () => {
  const [role, setRole] = useState('client')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: registerResolver,
  })

  const store = useAuthStore()
  const navigate = useNavigate()

  const onSubmit = (data: User) => {
    store.register(data).then(() => {
      if (store.isLoggedIn) navigate('/')
    })
  }

  const handleOnChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string
    setRole(value)
    setValue('role', role)
  }

  setValue('role', role)

  return (
    <Container>
      <Title name="Create your account"></Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InnerContainer>
          <Column>
            <InputLabel>Role</InputLabel>
            <Selector value={role} label="Role" onChange={handleOnChange}>
              <MenuItem value={'client'}>client</MenuItem>
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
        <SubmitButton type="submit" />
      </Form>
    </Container>
  )
}
