import styled from 'styled-components'
import { Box, Grid } from '@mui/material'


const StyledGridSectionOne = styled(Grid)`
    && {
      min-height: 500px;
      text-align: center;
      background-color: #f9f9f9;
    }
`
const StyledBoxSectionOne = styled(Box)`
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
const StyledTitleSection = styled.h1`
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
const StyledParagraphyOne = styled.h3`
    && {
      font-size: 20;
      line-height: 1.6;
      font-weight: 400;
      margin-bottom: 30px;
      text-align: center;
      color: grey;
    }
`
const StyledButtonGo = styled.button`
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
const StyledGridSectionTwo = styled(Grid)`
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
const StyledBoxTitle = styled(Box)`
  && {
    @media (min-width: 700px) and (max-width: 1200px) {
        height: 202px;
    }
  }
`
const StyledBoxSection = styled(Box)`
    && {
      max-width: 1200px;
      margin: 0 auto;
        @media (max-width: 600px) {
            padding: 0 10px;
        }
    }
`
const StyledSubtitle = styled.h3`
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
const StyledParagraphy = styled.p`
    && {
      margin-bottom: 20px;
      color: #666;
      font-size: 1.2em;
      line-height: 1.6;
      text-align: center;
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
const StyledGridSectionTree = styled(Grid)`
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
const StyledImage = styled.img`
    && {
      width: 100%;
      height: auto;      
    }
`

export {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledParagraphyOne,
  StyledButtonGo,
  StyledGridSectionTwo,
  StyledBoxTitle,
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledBoxImage,
  StyledGridSectionTree,
  StyledImage,
}