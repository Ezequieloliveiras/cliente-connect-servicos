import styled from 'styled-components'

import {
  Box,
  Grid,
} from '@mui/material'

const Section = styled(Grid)`
    && {
      min-height: 500px;
      text-align: center;
      background-color: #f9f9f9;
    }
`
const BoxSection = styled(Box)`
    && {
      max-width: 800px;
      margin: 0 auto;
      padding: 100px 10px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
const Paragraphy = styled.h3`
    && {
      font-size: 20;
      line-height: 1.6;
      font-weight: 400;
      margin-bottom: 30px;
      text-align: center;
      color: grey;
    }
`
const Button = styled.button`
    && {
      padding: 15px 30px;
      background-color: #9ccc65;
      font-size: 18px;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
`

export {
  Section,
  BoxSection,
  Title,
  Paragraphy,
  Button,
}