import {
  Container,
  Grid,
  Typography
} from '@mui/material'

import {
  StyledBoxFooter,
  StyledList,
  StyledLink,
} from './StylesFooter'


const Footer = () => {

  return (

    <StyledBoxFooter >

      <Container>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Contato do Criador</Typography>

            <StyledList >

              <Typography>Email: connectservicos@email.com</Typography>

              <Typography>Telefone: (27) 99999-9999</Typography>

              <Typography>Endereço: Vitória-ES</Typography>

            </StyledList>

          </Grid>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Sobre</Typography>

            <Typography>

            Nossa equipe oferece serviços de soluções tecnológicas para residências e empresas.
            </Typography>

          </Grid>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Saiba Mais</Typography>

            <StyledList>

              <Typography>

                <StyledLink  >

                  Termos de Serviço

                </StyledLink>

              </Typography>

              <Typography>

                <StyledLink >

                  Política de Privacidade

                </StyledLink>

              </Typography>

            </StyledList>

          </Grid>

        </Grid>

      </Container>

    </StyledBoxFooter>

  )
  
}

export default Footer
