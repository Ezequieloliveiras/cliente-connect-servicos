import Head from 'next/head'

import cameraImage from './images/cameras.png'
import cabeamentoImage from './images/cabeamento.png'
import nobreaksImage from './images/nobreak.png'
import servidoresImage from './images/servidor.png'
import computadoresImage from './images/computador.png'

import {
    StyledBoxDescription,
    ServiceDescription,
    ServiceTitle,
    ServiceImage,
    StyledBoxImage,
    ServiceSection,
    Title,
    Container,
} from './StylesServices'
import styled from 'styled-components'

const Styledtitle = styled.h1`
    font-size: 2.8em;
    color: #757575;
    text-align: center;
`

const Services = () => {
    return (
        <Container>

            <Styledtitle>Nossos Serviços</Styledtitle>

            <ServiceSection container >
                <StyledBoxImage >

                    <ServiceImage src={cameraImage} alt="Instalação de Câmeras" />

                </StyledBoxImage>

                <StyledBoxDescription >

                    <ServiceTitle variant='title'>Instalação de Câmeras</ServiceTitle>

                    <ServiceDescription variant='subtitle2'>

                        Nossa equipe oferece serviços de instalação de câmeras de segurança para residências e empresas.

                    </ServiceDescription>

                </StyledBoxDescription>

            </ServiceSection>

            <ServiceSection container>

                <StyledBoxImage>

                    <ServiceImage src={cabeamentoImage} alt="Instalação de Câmeras" />

                </StyledBoxImage>

                <StyledBoxDescription>

                    <ServiceTitle variant='title'>Cabeamento Estruturado</ServiceTitle>

                    <ServiceDescription variant='subtitle2'>

                        Oferecemos serviços de planejamento e instalação de cabeamento estruturado para redes de comunicação confiáveis e eficientes.

                    </ServiceDescription>

                </StyledBoxDescription>

            </ServiceSection>

            <ServiceSection container>

                <StyledBoxImage>

                    <ServiceImage src={nobreaksImage} alt="Instalação de Câmeras" />

                </StyledBoxImage>

                <StyledBoxDescription>

                    <ServiceTitle variant='title'>Manutenção de Nobreaks</ServiceTitle>

                    <ServiceDescription variant='subtitle2'>

                    Realizamos manutenção preventiva e corretiva em nobreaks para garantir o funcionamento contínuo de equipamentos sensíveis.

                    </ServiceDescription>

                </StyledBoxDescription>

            </ServiceSection>

            <ServiceSection container>

                <StyledBoxImage>

                    <ServiceImage src={servidoresImage} alt="Instalação de Câmeras" />

                </StyledBoxImage>

                <StyledBoxDescription>

                    <ServiceTitle variant='title'>Instalação de Servidores</ServiceTitle>

                    <ServiceDescription variant='subtitle2'>

                        Nossa equipe está capacitada para realizar a instalação e configuração de servidores para atender às demandas de armazenamento e processamento de dados.

                    </ServiceDescription>

                </StyledBoxDescription>

            </ServiceSection>

            <ServiceSection container>

                <StyledBoxImage>

                    <ServiceImage src={computadoresImage} alt="Instalação de Câmeras" />

                </StyledBoxImage>

                <StyledBoxDescription>

                    <ServiceTitle variant='title'>Manutenção de Computadores</ServiceTitle>

                    <ServiceDescription variant='subtitle2'>

                        Oferecemos serviços de manutenção e reparo de computadores para garantir o desempenho e a confiabilidade dos sistemas.

                    </ServiceDescription>

                </StyledBoxDescription>

            </ServiceSection>

        </Container>
    )
}

export default Services
