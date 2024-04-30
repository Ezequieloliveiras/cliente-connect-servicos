import cameraImage from './images/cameras.png'
import cabeamentoImage from './images/cabeamento.png'
import nobreaksImage from './images/nobreak.png'
import servidoresImage from './images/servidor.png'
import computadoresImage from './images/computador.png'

import {
    Styledtitle,
    StyledBox,
    StyledBoxDescription,
    ServiceDescription,
    ServiceTitle,
    ServiceImage,
    Container,
} from './StylesWork'

import { Grid } from '@mui/material'

// XS = EXTRA SMALL - MENOR PORCAO DE TELA
// SM = SMALL - MENOR TELA
// MD = MEDIUM
// LG = LARGE - TELA LARGA
// XL = EXTRA LARGE

const Services = () => {
    return (
        <Container>

            <Styledtitle>Nossos Serviços</Styledtitle>

            <StyledBox>

                <Grid container>

                    <Grid item xs={12} sm={6} height={250}>

                        <ServiceImage src={cameraImage} alt="Instalação de Câmeras" />

                    </Grid>

                    <Grid item xs={12} sm={6} >

                        <StyledBoxDescription>

                            <ServiceTitle variant='title'>Instalação de Câmeras</ServiceTitle>

                            <ServiceDescription variant='subtitle2'>

                                Nossa equipe oferece serviços de instalação de câmeras de segurança para residências e empresas.

                            </ServiceDescription>

                        </StyledBoxDescription>

                    </Grid>

                </Grid>
            </StyledBox>

            <StyledBox>

                <Grid container>

                    <Grid item xs={12} sm={6} height={250}>

                        <ServiceImage src={cabeamentoImage} alt="Instalação de Câmeras" />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <StyledBoxDescription>

                            <ServiceTitle variant='title'>Cabeamento Estruturado</ServiceTitle>

                            <ServiceDescription variant='subtitle2'>

                                Oferecemos serviços de planejamento e instalação de cabeamento estruturado para redes de comunicação confiáveis e eficientes.

                            </ServiceDescription>

                        </StyledBoxDescription>

                    </Grid>

                </Grid>

            </StyledBox>

            <StyledBox>

                <Grid container>

                    <Grid item xs={12} sm={6} height={250}>

                        <ServiceImage src={nobreaksImage} alt="Instalação de Câmeras" />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <StyledBoxDescription>

                            <ServiceTitle variant='title'>Manutenção de Nobreaks</ServiceTitle>

                            <ServiceDescription variant='subtitle2'>

                                Realizamos manutenção preventiva e corretiva em nobreaks para garantir o funcionamento contínuo de equipamentos sensíveis.

                            </ServiceDescription>

                        </StyledBoxDescription>

                    </Grid>

                </Grid>

            </StyledBox>

            <StyledBox>

                <Grid container>

                    <Grid item xs={12} sm={6} height={250}>

                        <ServiceImage src={servidoresImage} alt="Instalação de Câmeras" />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <StyledBoxDescription>

                            <ServiceTitle variant='title'>Instalação de Servidores</ServiceTitle>

                            <ServiceDescription variant='subtitle2'>

                                Nossa equipe está capacitada para realizar a instalação e configuração de servidores para atender às demandas de armazenamento e processamento de dados.

                            </ServiceDescription>

                        </StyledBoxDescription>

                    </Grid>

                </Grid>

            </StyledBox>

            <StyledBox>

                <Grid container>

                    <Grid item xs={12} sm={6}>

                        <ServiceImage src={computadoresImage} alt="Instalação de Câmeras" />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <StyledBoxDescription>

                            <ServiceTitle variant='title'>Manutenção de Computadores</ServiceTitle>

                            <ServiceDescription variant='subtitle2'>

                                Oferecemos serviços de manutenção e reparo de computadores para garantir o desempenho e a confiabilidade dos sistemas.

                            </ServiceDescription>

                        </StyledBoxDescription>

                    </Grid>

                </Grid>

            </StyledBox>

        </Container>
    )
}

export default Services
