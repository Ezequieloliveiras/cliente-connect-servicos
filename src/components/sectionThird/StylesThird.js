import styled from 'styled-components'

import {
  Box,
  Grid
} from '@mui/material'

const BoxSection = styled(Box)`
    && {
      max-width: 1200px;
      margin: 0 auto;
        @media (max-width: 600px) {
            padding: 0 10px;
        }
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
const Subtitle = styled.h3`
    && {
      color: #9ccc65;
      font-size: 1.5em;
      margin-bottom: 15px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 20px;
      }
    }
`
const Paragraphy = styled.p`
    && {
      margin-bottom: 20px;
      color: #666;
      font-size: 1.2em;
      line-height: 1.6;
      text-align: center;
    }
`
const Section = styled(Grid)`
    && {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9f9f9;
      padding: 50px 0;
      text-align: center;
      min-height: 600px;
    }
`

export {
  BoxSection,
  Title,
  Subtitle,
  Paragraphy,
  Section,
}