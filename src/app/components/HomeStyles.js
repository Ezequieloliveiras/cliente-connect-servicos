import styled from 'styled-components'
import { Box, Grid } from '@mui/material'



const StyledBoxTitle = styled(Box)`
  && {
    @media (min-width: 700px) and (max-width: 1200px) {
        height: 202px;
    }
  }
`


const StyledBoxImage = styled.div`
    && {
      width: 100%;
      height: auto;
      margin-top: 20px;
      box-shadow: 1px 1px 10px black;
                
      @media (max-width: 600px) {
          font-size: 1.rem;
      }
    }
`

const StyledImage = styled.img`
    && {
      width: 100%;
      height: auto;      
    }
`

export {

  StyledBoxTitle,

  StyledBoxImage,

  StyledImage,
}