import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { BASE_URL, toProfileUser, User } from '../../api/auth.api'
import { Button } from '../../components/Button/Button'
import { FormInput } from '../../components/FormInput/FormInput'
import { FormDialog } from './components/DialogButton'
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
  const [open, setOpen] = useState(false)

  const HandleClick = (data: User) => {
    setOpen(false)
    //const result = updateUser(data)
    //if(result.codigo = 200 tal)
  }

  const { isLoading, error, data } = useQuery('profile', () =>
    fetch(`${BASE_URL}clients/61bf30021081b8ba22e7a78f`).then((res) =>
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

  const dialog = {
    name: 'pass',
    buttonText: 'Update Profile',
    title: 'We need your password',
    text: 'Insert your password in order to update your profile',
    input: {
      label: 'Password',
      type: 'password',
    },
    register: register,
  }

  if (error) return <div>"Error"</div>
  else if (!isLoading) {
    const profile = toProfileUser(data)
    profile.password = 'pass de ejemplo'
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
  } else return <div></div>
}
