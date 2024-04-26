import styled from 'styled-components'
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'

const Container = styled.div`
  && {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 5px;
}
`
const Title = styled.h1`
  && {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

`
const ServiceSection = styled(Grid)`
  && {
  display: flex;
  border-radius: 11px;
  box-shadow: 0px 0px 3px 0px;
  margin-top: 50PX;
}

`
const StyledBoxImage = styled(Box)`
 && {
  height: 400px;
  width: 100%;
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 100%;
}
`
const ServiceImage = styled(Image)`
 && {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}
  
`
const ServiceTitle = styled(Typography)`
  && {
  font-size: 2rem;
  color: #9ccc65;
}
  @media (max-width: 768px) {
    font-size: 22px;
}
`
const StyledBoxDescription = styled(Box)`
  && {
  color: #757575;
  text-align: center;
  padding: 20px;
}

`
const ServiceDescription = styled(Typography)`
  && {
  font-size: 1.1rem;
  margin-top: 20px;
  text-align: center;
}
`
const Styledtitle = styled.h1`
    font-size: 2.8em;
    color: #757575;
    text-align: center;
    @media (max-width: 768px) {
    font-size: 35px;
}
`
export {
    Styledtitle,
    StyledBoxDescription,
    ServiceDescription,
    ServiceTitle,
    ServiceImage,
    StyledBoxImage,
    ServiceSection,
    Title,
    Container,
}