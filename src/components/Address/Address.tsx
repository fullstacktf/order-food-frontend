import styled from "@emotion/styled";
import React, { FC } from "react";

const AddressContainer = styled.div`
  margin: 5px;
  text-shadow: 1px 1px 2px black;
  border-radius: 20px;
  padding: 10px;
  background: #D6D6D6;
`

interface AddressProps {
  street: string;
  zipcode: number;
  country: string;
  city: string;
}

export const Address: FC<AddressProps> = ({ street, zipcode, country, city }) => (
  <AddressContainer>
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
  </AddressContainer >
);
