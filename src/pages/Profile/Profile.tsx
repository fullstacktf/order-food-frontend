import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { BASE_URL, toProfileUser, updateUser, User } from '../../api/auth.api'
import { Button } from '../../components/Button/Button'
import { FormInput } from '../../components/FormInput/FormInput'
import { FormDialog } from './components/FormDialog'
import { profileResolver } from './ProfileResolver'

interface FormColumnData {
  name: string
  type: string
}

const leftColumn: FormColumnData[] = [
  { name: 'email', type: 'text' },
  { name: 'name', type: 'text' },
  { name: 'new password', type: 'password' },
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

const InnerContainer = styled.div`
  background-color: white;
  display: flex;
  width: 80%;
  border-radius: 20px;
  padding: 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Columns = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1%;
  justify-content: center;
  align-items: center;
`

// TODO Sustituir por id del cliente logueado
export const Profile = () => {
  const userId = JSON.parse(localStorage.getItem('user')!).id
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: profileResolver,
  })
  const { isLoading, error, data } = useQuery('profile', () =>
    fetch(`${BASE_URL}clients/${userId}`).then((res) => res.json())
  )

  const HandleClick = (data: User & { pass: string }) => {
    if (data.pass !== '') {
      setOpen(false)
      updateUser(data, data.pass, userId)
    }
  }

  const dialog = {
    name: 'pass',
    buttonText: 'Update Profile',
    title: 'We need your password',
    text: `Insert your current password so we can verify it's you`,
    input: {
      label: 'Password',
      type: 'password',
    },
    register: register,
  }
  if (error) return <div>"Error"</div>
  if (isLoading) return <div>"Loading"</div>
  else {
    const profile = toProfileUser(data)
    return (
      <Container>
        <InnerContainer>
          <Columns>
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
            <Column>
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
            </Column>
          </Columns>
          <Button
            text={dialog.buttonText}
            onClickHandler={() => setOpen(true)}
          ></Button>
          <FormDialog
            open={open}
            data={dialog}
            handleSubmit={handleSubmit(HandleClick)}
            handleClose={() => setOpen(false)}
          />
        </InnerContainer>
      </Container>
    )
  }
}
