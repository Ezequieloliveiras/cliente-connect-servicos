import Image from 'next/image'
import {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledTitleSection,
  StyledParagraphyOne,
  StyledButtonGo,
} from '../HomeStyles'


import Banner from './esample.jpg'



export default function SectionOne() {

  return (
    <>
      <Image src={Banner} style={{ height: 'auto', width: '100%', display: 'flex', objectFit:'cover' }} />

      <StyledGridSectionOne item xs={12}>

        <StyledBoxSectionOne >

          <StyledTitleSection >

            Proteja seu negócio com sistemas de vigilância de ponta!

          </StyledTitleSection>

          <StyledParagraphyOne >

            Nossa equipe especializada está pronta para implementar soluções avançadas de segurança, incluindo instalação de câmeras de última geração, cabeamento estruturado, manutenção de nobreaks, instalação de servidores e manutenção de computadores. Não deixe sua empresa vulnerável, proteja seus ativos agora!

          </StyledParagraphyOne>

          <StyledButtonGo>

            Entre em contato

          </StyledButtonGo>

        </StyledBoxSectionOne>

      </StyledGridSectionOne >


    </>

  )

}
