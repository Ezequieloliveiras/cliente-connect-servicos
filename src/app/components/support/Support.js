import { Divider } from '@mui/material';

import {
    StyledContainer,
    StyledSupportContent,
    StyledSection,
    StyledSupportButton,
    StyledTopic,
    StyledSubTopicList,
    StyledSubTopic,
    StyledStrong,
    StyledTitleSupport,
    StyledTitleForm,
    StyledBoxButton,
    StyledParagraphy,
    StyledTitleButton,
} from './StylesSupport'

const SupportPage = () => {

    return (
        <>
            <StyledContainer>

                <StyledTitleSupport >Canal de Suporte</StyledTitleSupport>

                <StyledParagraphy>Bem-vindo(a) ao nosso Canal de Suporte. Estamos aqui para ajudá-lo!</StyledParagraphy>

                <Divider />

                <StyledBoxButton>

                    <StyledTitleButton >Clique no botão abaixo para solicitar ajuda:</StyledTitleButton>

                    <StyledSupportButton href='#'>

                        Obter Ajuda Agora

                    </StyledSupportButton>

                </StyledBoxButton>

                <br />

                <StyledSupportContent>

                    <StyledSection>

                        <StyledTitleForm >Alguns dos serviços que oferecemos</StyledTitleForm>

                        <form>

                            <StyledTopic>

                                <StyledStrong>Implementação de Soluções Avançadas de Segurança:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Suporte especializado na implementação de sistemas de segurança, incluindo câmeras de última geração e tecnologias de vigilância.</StyledSubTopic>

                                    <StyledSubTopic>Configuração e otimização de sistemas de segurança para atender às necessidades específicas da empresa.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                            <StyledTopic>

                                <StyledStrong>Instalação de Câmeras de Última Geração:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Suporte completo desde o planejamento até a instalação de câmeras de alta qualidade para monitoramento eficaz.</StyledSubTopic>

                                    <StyledSubTopic>Orientação na seleção das melhores câmeras para diferentes áreas e necessidades de segurança.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                            <StyledTopic>

                                <StyledStrong>Cabeamento Estruturado:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Suporte na concepção e implementação de infraestrutura de rede eficiente e organizada.</StyledSubTopic>

                                    <StyledSubTopic>Instalação e manutenção de cabeamento estruturado para garantir conectividade confiável e desempenho de rede.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                            <StyledTopic>

                                <StyledStrong>Manutenção de Nobreaks:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Serviços de suporte para garantir o funcionamento contínuo dos nobreaks, incluindo inspeção regular, testes de carga e substituição de baterias quando necessário.</StyledSubTopic>

                                    <StyledSubTopic>Resposta rápida a falhas ou problemas de energia para minimizar o tempo de inatividade.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                            <StyledTopic>

                                <StyledStrong>Instalação de Servidores:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Suporte abrangente na instalação e configuração de servidores para garantir desempenho ideal e segurança dos dados.</StyledSubTopic>

                                    <StyledSubTopic>Implementação de medidas de segurança avançadas para proteger os servidores contra ameaças cibernéticas.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                            <StyledTopic>

                                <StyledStrong>Manutenção de Computadores:</StyledStrong>

                                <StyledSubTopicList>

                                    <StyledSubTopic>Serviços de suporte para manter a saúde e o desempenho dos computadores da empresa.</StyledSubTopic>

                                    <StyledSubTopic>Diagnóstico e resolução de problemas, atualizações de software e hardware, e monitoramento proativo para evitar falhas.</StyledSubTopic>

                                </StyledSubTopicList>

                            </StyledTopic>

                        </form>

                    </StyledSection>

                </StyledSupportContent>

            </StyledContainer>

        </>

    )
}

export default SupportPage;
