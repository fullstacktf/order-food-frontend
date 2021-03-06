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
  initialValue?: string | number
}

export const FormInput: FC<formInput> = ({
  errors,
  register,
  name,
  type,
  initialValue,
}) => {
  if (initialValue === '')
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
  else
    return (
      <StyledField
        error={errors[name] !== undefined}
        helperText={errors[name]?.message}
        label={capitalize(name)}
        type={type}
        variant="outlined"
        defaultValue={initialValue}
        {...register(name)}
      />
    )
}
