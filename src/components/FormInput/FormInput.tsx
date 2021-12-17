import styled from '@emotion/styled'
import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { capitalize } from '../../utils/strings/capitalize'

const StyledField = styled(TextField)`
  width: 100%;
  margin-top: 10px;
`

interface formInput {
  errors: any
  register: any
  name: string
  type: string
}

export const FormInput: FC<formInput> = ({ errors, register, name, type }) => {
  return (
    <StyledField
      error={errors[name] !== undefined}
      helperText={errors[name]?.message}
      label={capitalize(name)}
      type={type}
      variant="outlined"
      {...register(name)}
    />
  )
}
