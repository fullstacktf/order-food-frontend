import styled from '@emotion/styled'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { BASE_URL, toProfileUser, updateUser, User } from '../../api/auth.api'
import { FormInput } from '../../components/FormInput/FormInput'
import { profileResolver } from './ProfileResolver'

interface FormColumnData {
  name: string
  type: string
}

const leftColumn: FormColumnData[] = [
  { name: 'email', type: 'text' },
  { name: 'name', type: 'text' },
  { name: 'password', type: 'password' },
  { name: 'phone', type: 'number' },
]

const rightColumn: FormColumnData[] = [
  { name: 'street', type: 'text' },
  { name: 'city', type: 'text' },
  { name: 'country', type: 'text' },
  { name: 'zipCode', type: 'number' },
]

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
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
  background-color: white;
  display: flex;
  width: 100%;
  border-radius: 20px;
  padding: 1%;
  margin-bottom: 1%;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 80%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const HandleClick = (data: User) => {
  const result = updateUser(data)
  //if(result.codigo = 200 tal)
}

// TODO Sustituir por id del cliente logueado
export const Profile = () => {
  const { isLoading, error, data } = useQuery('profile', () =>
    fetch(`${BASE_URL}clients/61be554065a7a1da79d0a9ea`).then((res) =>
      res.json()
    )
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: profileResolver,
  })

  if (error) return <div>"Error"</div>
  if (!isLoading) {
    const profile = toProfileUser(data)
    profile.password = 'pass de ejemplo'
    return (
      <Container>
        <Form onSubmit={handleSubmit(HandleClick)}>
          <InnerContainer>
            <Column>
              {leftColumn.map(function (value, i) {
                return (
                  <FormInput
                    type={value.type}
                    name={value.name}
                    errors={errors}
                    register={register}
                    key={i}
                    initialValue={profile[value.name]}
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
                    initialValue={profile[value.name]}
                  />
                )
              })}
            </LeftColumn>
          </InnerContainer>
          <input type="submit" />
        </Form>
      </Container>
    )
  } else return <div></div>
}
