import { Grid } from '@mui/material'

import {
  BoxSection,
  Title,
  Subtitle,
  Paragraphy,
  Section,
} from './StylesThird'

export default function SectionTree() {


  return (
    <>

      <Section item xs={12} sx={{ height: 'auto' }}>

        <BoxSection>

          <Title>

            Por que nos escolher?

          </Title>

          <Grid container spacing={3} justifyContent="center">

            <Grid item xs={12} sm={4} >

              <Subtitle>

                Experiência em Soluções de Segurança

              </Subtitle>

              <Paragraphy>

                Nossa equipe tem uma vasta experiência em projetos de segurança, incluindo instalação de câmeras de vigilância, cabeamento estruturado e configuração de servidores, proporcionando tranquilidade e proteção para o seu negócio.

              </Paragraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <Subtitle>

                Soluções Personalizadas

              </Subtitle>

              <Paragraphy>

                Desenvolvemos soluções personalizadas para atender às necessidades específicas de segurança da sua empresa, garantindo que cada detalhe do sistema de vigilância seja adaptado às suas exigências e ambiente.

              </Paragraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <Subtitle>

                Suporte Técnico Especializado

              </Subtitle>

              <Paragraphy>

                Estamos comprometidos em fornecer suporte técnico especializado, oferecendo assistência rápida e eficiente na manutenção de computadores, nobreaks e outros equipamentos essenciais para a segurança e funcionamento do seu sistema de vigilância.

              </Paragraphy>

            </Grid>

          </Grid>

        </BoxSection>

      </Section>

    </>

  )

}
