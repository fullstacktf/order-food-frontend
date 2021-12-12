import React, { FC } from 'react'
interface AddressProps {
  street: string
  zipcode: number
  country: string
  city: string
}

export const Address: FC<AddressProps> = ({
  street,
  zipcode,
  country,
  city,
}) => (
  <div className="summary_address">
    <h2>Address information</h2>
    <ul>
      <li>
        <strong>Street: </strong>
        {street}
      </li>
      <li>
        <strong>ZipCode: </strong>
        {zipcode}
      </li>
      <li>
        <strong>Country: </strong>
        {country}
      </li>
      <li>
        <strong>City: </strong>
        {city}
      </li>
    </ul>
  </div>
)
