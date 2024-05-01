import { Box } from '@mui/material'

import {
  Section,
  Title,
} from './StylesSecondary'

import CarouselImages from './Carousel'

export default function SectionrTwo() {

  return (
    <>

      <Section item xs={12}>

        <Title>

          Trabalhos Realizados

        </Title>

        <Box>

          <CarouselImages/>

        </Box>

      </Section>

    </>

  )

}