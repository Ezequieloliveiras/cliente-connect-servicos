import styled from 'styled-components'
import { Grid } from '@mui/material'

const Section = styled(Grid)`
    && {
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
    }
`
const Title = styled.h1`
    && {
      font-size: 2.6em;
      color: rgb(12, 60, 96);
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 27px;
      }
    }
`

export {
    Section,
    Title,
}