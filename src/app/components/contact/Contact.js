import { Box, Typography, Link, Card, Grid } from '@mui/material'

import Banner from './banner.png'
import {
  StyledDivCard,
  StyledContainer,
  StyledContainerBanner,
  StyledBanner,
  StyledWhatsAppIcon,
  StyledForwardToInboxIcon,
  StyledBoxContacts,
  StyledBox,

} from './StylesContact'


const ContactPage = () => {

  return (
    <StyledContainer >

      <StyledContainerBanner>

        <StyledBanner src={Banner} alt="Imagem" />

      </StyledContainerBanner>

      <StyledDivCard>

        <StyledBox>

          <Typography color="grey">

            Para entrar em contato conosco, utilize os seguintes meios:

          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            marginTop={2}
            justifyContent='center'
          >

            <StyledBoxContacts marginBottom={1}>

              <StyledForwardToInboxIcon />

              <Link href="mailto:ezequieloliveiraes@outlook.com">ezequieloliveiraes@outlook.com</Link>

            </StyledBoxContacts>

            <StyledBoxContacts >

              <StyledWhatsAppIcon />

              <Link href="https://api.whatsapp.com/send?phone=27997337338">WhatsApp</Link>

            </StyledBoxContacts>

          </Box>

        </StyledBox>
      </StyledDivCard>




    </StyledContainer>

  )

}

export default ContactPage
