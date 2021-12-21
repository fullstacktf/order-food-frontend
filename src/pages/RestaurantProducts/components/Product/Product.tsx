import styled from '@emotion/styled'
import DeleteIcon from '@mui/icons-material/Delete'
import Edit from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar'
import React, { FC } from 'react'
import { Button } from '../../../../components/Button/Button'

interface productProps {
  productId: string
  category?: string
  name: string
  price: number
  image?: string
}

const IMAGE_URL = 'https://manz.dev/assets/stickers/gopher.png'

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 0.5fr 0.5fr;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid gray;
  border-radius: 5px;
  width: 60%;
  background: #ffa06f;
`

const ProductData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const DataItem = styled.div`
  margin: 5px;
`

const StyledAvatar = styled(Avatar)`
  image-rendering: pixelated;
  filter: drop-shadow(0 0 10px crimson);
`

const ButtonHolder = styled.div`
  display: flex;
`

export const Product: FC<productProps> = ({
  category,
  name,
  price,
  image = IMAGE_URL,
}) => {
  const deleteItemHandler = () => {}
  const modifyItemHandler = () => {}

  return (
    <ProductContainer>
      <StyledAvatar
        sx={{ width: 68, height: 68 }}
        alt="Comiditapp Restaurant"
        src={image}
      ></StyledAvatar>
      <ProductData>
        <DataItem>{name}</DataItem>
        <DataItem>
          <strong> {category}</strong>
        </DataItem>
      </ProductData>
      <ProductData>
        <DataItem>
          <strong>Price:</strong> {price.toFixed(2)} €
        </DataItem>
      </ProductData>
      <ButtonHolder>
        <Button
          onClickHandler={modifyItemHandler}
          theme="black"
          icon={<Edit />}
        ></Button>
        <Button
          onClickHandler={deleteItemHandler}
          theme="black"
          icon={<DeleteIcon />}
        ></Button>
      </ButtonHolder>
    </ProductContainer>
  )
}
