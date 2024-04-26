'use client'

import { Grid } from '@mui/material'
import SectionOne from './components/sectionOne/SectionOne'
import SectionTwo from './components/sectionTwo/SectionTwo'
import SectionTree from './components/sectionTree/SectionTree'

export default function Home() {

  return (
    <Grid>

      <SectionOne />

      <SectionTwo />

      <SectionTree />

    </Grid>

  )

}