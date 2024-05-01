import {
  Box,
  Typography,
  Link
} from '@mui/material'

import {
  Container,
  ContainerBanner,
  Banner,
  WhatsAppNumberIcon,
  ForwardToInboxIconEmail,
  BoxContacts,
  BoxContent,
} from './StylesContact'

import ImageBanner from './banner.png'

const ContactPage = () => {

  return (
    <>

      <ContainerBanner>

        <Banner src={ImageBanner} alt="Imagem" />

      </ContainerBanner>

      <Container>

        <BoxContent>

          <Typography color="grey">

            Para entrar em contato conosco, utilize os seguintes meios:

          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            marginTop={2}
            justifyContent='center'
          >

            <BoxContacts marginBottom={1}>

              <ForwardToInboxIconEmail />

              <Link href="mailto:connectservicos@email.com">connectservicos@email.com</Link>

            </BoxContacts>

            <BoxContacts >

              <WhatsAppNumberIcon />

              <Link href="https://api.whatsapp.com/send?phone=279999-9999">WhatsApp</Link>

            </BoxContacts>

          </Box>

        </BoxContent>

      </Container>

    </>

  )

}

export default ContactPage
