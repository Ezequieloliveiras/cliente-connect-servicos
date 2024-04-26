import { Grid } from '@mui/material'

import {
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledGridSectionTree,
} from '../HomeStyles'

export default function SectionTree() {


  return (
    <>

      <StyledGridSectionTree item xs={12} sx={{ height: 'auto' }}>

        <StyledBoxSection>

          <StyledTitleSection>

            Por que nos escolher?

          </StyledTitleSection>

          <Grid container spacing={3} justifyContent="center">

            <Grid item xs={12} sm={4} >

              <StyledSubtitle>

                Experiência em Soluções de Segurança

              </StyledSubtitle>

              <StyledParagraphy>

                Nossa equipe tem uma vasta experiência em projetos de segurança, incluindo instalação de câmeras de vigilância, cabeamento estruturado e configuração de servidores, proporcionando tranquilidade e proteção para o seu negócio.

              </StyledParagraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Soluções Personalizadas

              </StyledSubtitle>

              <StyledParagraphy>

                Desenvolvemos soluções personalizadas para atender às necessidades específicas de segurança da sua empresa, garantindo que cada detalhe do sistema de vigilância seja adaptado às suas exigências e ambiente.

              </StyledParagraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Suporte Técnico Especializado

              </StyledSubtitle>

              <StyledParagraphy>

                Estamos comprometidos em fornecer suporte técnico especializado, oferecendo assistência rápida e eficiente na manutenção de computadores, nobreaks e outros equipamentos essenciais para a segurança e funcionamento do seu sistema de vigilância.

              </StyledParagraphy>

            </Grid>

          </Grid>

        </StyledBoxSection>

      </StyledGridSectionTree>

    </>

  )

}
