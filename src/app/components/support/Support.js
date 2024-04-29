import { Box, Divider } from '@mui/material';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const SupportContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

const Section = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  h2 {
    margin-top: 0;
  }
`

const SupportButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Topic = styled.li`
  margin-bottom: 20px;
`

const SubTopicList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`

const SubTopic = styled.li`
  margin-bottom: 10px;
  color: gray;
`

const StyledStrong = styled.strong`
  color: rgb(12, 60, 96);
`

const SupportPage = () => {

  return (
    <>
      <Container>
        <Box sx={{marginBottom:'50px', marginTop:'50px'}}>
          <h1 style={{color:'rgb(12, 60, 96)'}}>Canal de Suporte</h1>
          <p style={{color:'grey'}}>Bem-vindo(a) ao nosso Canal de Suporte. Estamos aqui para ajudá-lo!</p>
        </Box>
        <Divider />
        <div style={{ marginTop: '40px', marginBottom: '40px', display:'flex', flexDirection:'column' }}>
          <h4 style={{color:'grey'}}>Clique no botão abaixo para solicitar ajuda:</h4>
          <SupportButton href='#'>
            Obter Ajuda Agora
          </SupportButton>
        </div>
        <br />
        <SupportContent>
          <Section>
            <h2 style={{color:'rgb(12, 60, 96)', textAlign: 'center', marginBottom: '40px' }}>Alguns dos serviços que oferecemos</h2>
            <form>
              <Topic>
                <StyledStrong>Implementação de Soluções Avançadas de Segurança:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Suporte especializado na implementação de sistemas de segurança, incluindo câmeras de última geração e tecnologias de vigilância.</SubTopic>
                  <SubTopic>Configuração e otimização de sistemas de segurança para atender às necessidades específicas da empresa.</SubTopic>
                </SubTopicList>
              </Topic>
              <Topic>
                <StyledStrong>Instalação de Câmeras de Última Geração:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Suporte completo desde o planejamento até a instalação de câmeras de alta qualidade para monitoramento eficaz.</SubTopic>
                  <SubTopic>Orientação na seleção das melhores câmeras para diferentes áreas e necessidades de segurança.</SubTopic>
                </SubTopicList>
              </Topic>
              <Topic>
                <StyledStrong>Cabeamento Estruturado:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Suporte na concepção e implementação de infraestrutura de rede eficiente e organizada.</SubTopic>
                  <SubTopic>Instalação e manutenção de cabeamento estruturado para garantir conectividade confiável e desempenho de rede.</SubTopic>
                </SubTopicList>
              </Topic>
              <Topic>
                <StyledStrong>Manutenção de Nobreaks:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Serviços de suporte para garantir o funcionamento contínuo dos nobreaks, incluindo inspeção regular, testes de carga e substituição de baterias quando necessário.</SubTopic>
                  <SubTopic>Resposta rápida a falhas ou problemas de energia para minimizar o tempo de inatividade.</SubTopic>
                </SubTopicList>
              </Topic>
              <Topic>
                <StyledStrong>Instalação de Servidores:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Suporte abrangente na instalação e configuração de servidores para garantir desempenho ideal e segurança dos dados.</SubTopic>
                  <SubTopic>Implementação de medidas de segurança avançadas para proteger os servidores contra ameaças cibernéticas.</SubTopic>
                </SubTopicList>
              </Topic>
              <Topic>
                <StyledStrong>Manutenção de Computadores:</StyledStrong>
                <SubTopicList>
                  <SubTopic>Serviços de suporte para manter a saúde e o desempenho dos computadores da empresa.</SubTopic>
                  <SubTopic>Diagnóstico e resolução de problemas, atualizações de software e hardware, e monitoramento proativo para evitar falhas.</SubTopic>
                </SubTopicList>
              </Topic>
            </form>
          </Section>
        </SupportContent>
      </Container>
    </>
  );
};

export default SupportPage;
