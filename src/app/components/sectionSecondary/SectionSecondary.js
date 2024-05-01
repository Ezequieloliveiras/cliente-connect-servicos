import { Box } from '@mui/material'

import {
  Section,
  Title,
} from './StylesSecondary'

import ServiceImage from './ImagesServices'

export default function SectionrTwo() {

  return (
    <>

      <Section item xs={12}>

        <Title>

          Trabalhos Realizados

        </Title>

        <Box>

          <ServiceImage />

        </Box>

      </Section>

    </>

  )

}