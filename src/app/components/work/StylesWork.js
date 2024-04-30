import styled from 'styled-components'
import Image from 'next/image'

import {
  Box,
  Typography,
} from '@mui/material'

const Container = styled.div`
  && {
  max-width: 800px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
`
const Title = styled.h1`
  && {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

`
const ServiceImage = styled(Image)`
 && {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 0px 0px 5px;
}
`
const StyledBox = styled(Box)`
&& {
    margin: 10px;
    box-shadow: 0px 0px 5px 0px grey;
    border-radius: 5px;
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
    color: rgb(12, 60, 96);
    text-align: center;
    @media (max-width: 768px) {
    font-size: 35px;
}
`
export {
  Styledtitle,
  StyledBox,
  StyledBoxDescription,
  ServiceDescription,
  ServiceTitle,
  ServiceImage,
  Title,
  Container,
}