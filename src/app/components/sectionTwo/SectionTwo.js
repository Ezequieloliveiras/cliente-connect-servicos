import { Box } from '@mui/material'

import {
  StyledGridSectionTwo,
  StyledTitleSection,
} from '../HomeStyles'

import ServiceImage from './ImagesServices'

export default function SectionTwo() {

  return (
    <>

      <StyledGridSectionTwo item xs={12}>

        <StyledTitleSection>

          Trabalhos Realizados

        </StyledTitleSection>

        <Box>

          <ServiceImage />

        </Box>

      </StyledGridSectionTwo>

    </>

  )

}