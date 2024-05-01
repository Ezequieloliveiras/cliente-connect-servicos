import Image from 'next/image'
import {
  Section,
  BoxSection,
  Title,
  Paragraphy,
  Button,
} from './StylesPrimary'


import Banner from './esample.jpg'



export default function SectionOne() {

  return (
    <>
      <Image src={Banner} style={{ height: 'auto', width: '100%', display: 'flex', objectFit:'cover' }}  alt='banner'/>

      <Section item xs={12}>

        <BoxSection>

          <Title>

            Proteja seu negócio com sistemas de vigilância de ponta!

          </Title>

          <Paragraphy>

            Nossa equipe especializada está pronta para implementar soluções avançadas de segurança, incluindo instalação de câmeras de última geração, cabeamento estruturado, manutenção de nobreaks, instalação de servidores e manutenção de computadores. Não deixe sua empresa vulnerável, proteja seus ativos agora!

          </Paragraphy>

          <Button>

            Entre em contato

          </Button>

        </BoxSection>

      </Section >

    </>

  )

}
