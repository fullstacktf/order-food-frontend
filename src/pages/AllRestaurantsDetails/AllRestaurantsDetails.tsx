import styled from '@emotion/styled'
import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/auth.api'
import { Header } from './components/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`

const RestaurantsContainer = styled.div`
  display: flex;
  text-align: center;
  width: 90%;
  height: fit-content;
`
const IMAGE_URL = 'https://manz.dev/assets/stickers/gopher.png'

export interface CurrentBackUser {
  id: string
  role: string
  name: string
  email: string
  password: string
  phone: number
  address: {
    city: string
    country: string
    street: string
    zipCode: string
  }[]
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space;
  align-items: flex-start;
`

const StyledCard = styled(Card)`
  margin: 20px;
  padding: 5px;
  img {
    image-rendering: pixelated;
  }
  :hover {
    transform: scale(1.1);
    z-index: 1;
  }
  transition: transform 1s;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const AllRestaurantsDetails = () => {
  const { isLoading, error, data } = useQuery('restaurants', () =>
    fetch(`${BASE_URL}restaurants`).then((res) => res.json())
  )

  if (isLoading) return <div>"Loading!"</div>
  else if (error) return <div>"Error"</div>
  else
    return (
      <Container>
        <Header></Header>
        <RestaurantsContainer>
          {data.map((r: CurrentBackUser) => {
            const { city, street } = r.address[0]
            return (
              <StyledLink to={r.id}>
                <StyledCard sx={{ width: 350 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="264"
                      image={IMAGE_URL}
                      alt={r.name + ' image'}
                    />
                    <StyledCardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {r.name.toLocaleUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        <strong>Street:</strong> {street}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        <strong>City:</strong> {city}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        <strong>Email: </strong> {r.email}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        <strong>Phone:</strong> {r.phone}
                      </Typography>
                    </StyledCardContent>
                  </CardActionArea>
                </StyledCard>
              </StyledLink>
            )
          })}
        </RestaurantsContainer>
      </Container>
    )
}
