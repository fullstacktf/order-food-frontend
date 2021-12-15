import styled from '@emotion/styled'
import React, { FC } from 'react'

interface AddressDetailsProps {
  street: string
  country: string
  postalCode: number
  city: string
  streetNumber: number
}

const AddressContainer = styled.div`
  margin: 10px;
`

export const AddressDetails: FC<AddressDetailsProps> = ({
  street,
  country,
  postalCode,
  city,
  streetNumber,
}) => {
  return (
    <AddressContainer>
      {street
        .concat(', ')
        .concat(streetNumber.toString())
        .concat(', ')
        .concat(city)
        .concat(', ')
        .concat(postalCode.toString())
        .concat(` (${country})`)}
    </AddressContainer>
  )
}
