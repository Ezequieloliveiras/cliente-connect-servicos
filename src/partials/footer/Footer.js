import {
  Typography
} from '@mui/material'

import {
  ConatinerFooter,
  BoxContent,
  ContentFooter,
  TitleFooter,
  Description,
  BoxFooter,
  List,
  LinkFooter,
  StyledIframe,
  ContainerMap,
  Info,
} from './StylesFooter'

const Footer = () => {

  return (

    <BoxFooter>

      <ConatinerFooter>

        <BoxContent container spacing={3}>

          <ContentFooter item xs={12} sm={4}>

            <TitleFooter variant="h6" >Contato</TitleFooter>

            <Description>

              <Description>Email: connectservicos@email.com</Description>

              <Description>Telefone: +55 27 99911-7096</Description>

              <Description>Endereço: Serra-ES</Description>

            </Description>

          </ContentFooter>

          <ContentFooter item xs={12} sm={4}>

            <TitleFooter variant="h6">Sobre</TitleFooter>

            <Description>

              Nossa equipe oferece serviços de soluções tecnológicas para residências e empresas.

            </Description>

          </ContentFooter>

          <ContentFooter item xs={12} sm={4} >

            <TitleFooter variant="h6">Saiba Mais</TitleFooter>

            <List>

              <Description>

                <Typography>

                  Termos de Serviço

                </Typography>

              </Description>

              <Description>

                <LinkFooter>

                  Política de Privacidade

                </LinkFooter>

              </Description>

            </List>

          </ContentFooter>

        </BoxContent>

      </ConatinerFooter>

      <ContainerMap>

        <StyledIframe

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29955.958223326124!2d-40.27828282862653!3d-20.196750750131496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81edd09f20441%3A0xa492f5f0f308065!2sParque%20Res.%20Laranjeiras%2C%20Serra%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1714589805845!5m2!1spt-BR!2sbr" alt='map'>

        </StyledIframe>

      </ContainerMap>

      <Info>

        Create by sitevix 2024

      </Info>

    </BoxFooter>

  )

}

export default Footer
