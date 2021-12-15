import styled from '@emotion/styled'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Snackbar from '@mui/material/Snackbar'
import React, { FC, useState } from 'react'
import { Button } from '../../../../components/Button/Button'
import { ProductInfo } from '../../models/ProductInfo.model'
import { ProductProps } from '../../models/ProductProps.model'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

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

export const Product: FC<ProductProps> = ({
  category,
  name,
  price,
  image = IMAGE_URL,
}) => {
  const [SuccessOpen, setSuccessOpen] = useState(false)
  const [ErrorOpen, setErrorOpen] = useState(false)

  const addItemToLocalStorage = () => {
    const data: ProductInfo = {
      name,
      price,
      category,
    }
    if (!localStorage.getItem(name)) {
      setSuccessOpen(!SuccessOpen)
      localStorage.setItem(name, JSON.stringify(data))
    } else setErrorOpen(!ErrorOpen)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setSuccessOpen(false)
    setErrorOpen(false)
  }

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
          <strong> {category}</strong>s
        </DataItem>
      </ProductData>
      <ProductData>
        <DataItem>
          <strong>Price:</strong> {price.toFixed(2)} €
        </DataItem>
      </ProductData>
      <Button
        onClickHandler={addItemToLocalStorage}
        theme="black"
        text="Add to cart"
        icon={<AddShoppingCartIcon />}
      ></Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={SuccessOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product added to cart!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={ErrorOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Product is already on the cart!
        </Alert>
      </Snackbar>
    </ProductContainer>
  )
}
