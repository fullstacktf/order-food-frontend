import styled from '@emotion/styled'
import React, { FC } from 'react'

interface AddressDetailsProps {
  street: string
  country: string
  zipCode: number
  city: string
}

const AddressContainer = styled.div`
  margin: 10px;
`

export const AddressDetails: FC<AddressDetailsProps> = ({
  street,
  country,
  zipCode,
  city,
}) => {
  return (
    <AddressContainer>
      {street
        .concat(', ')
        .concat(city)
        .concat(', ')
        .concat(zipCode.toString())
        .concat(` (${country})`)}
    </AddressContainer>
  )
}
