import {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledTitleOne,
  StyledParagraphyOne,
  StyledButtonGo,
} from '../HomeStyles'

export default function SectionOne() {


  return (
    <>

      <StyledGridSectionOne item xs={12}>

        <StyledBoxSectionOne>

          <StyledTitleOne >

            Proteja seu negócio com sistemas de vigilância de ponta!

          </StyledTitleOne>

          <StyledParagraphyOne >

            Nossa equipe especializada está pronta para implementar soluções avançadas de segurança, incluindo instalação de câmeras de última geração, cabeamento estruturado, manutenção de nobreaks, instalação de servidores e manutenção de computadores. Não deixe sua empresa vulnerável, proteja seus ativos agora!

          </StyledParagraphyOne>

          <StyledButtonGo>

            Entre em contato

          </StyledButtonGo>

        </StyledBoxSectionOne>

      </StyledGridSectionOne>

    </>

  )

}
