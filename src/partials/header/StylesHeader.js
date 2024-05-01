import styled from 'styled-components'
import Link from 'next/link'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
} from '@mui/material'


const StyledAppBar = styled(AppBar)`

    && {
        background-color: rgb(12, 60, 96);
        display:flex;
        justify-content:center;
        
    }

`
const StyledToolbar = styled(Toolbar)`

    && {
        display: flex;
        justify-content: center;
        margin: auto;
        color: #757575;
    }
`
const LinkLogo= styled(Link)`

    && {
        display: flex;
        font-family: monospace;
        font-weight: 700;
        letter-spacing: .3rem;
        color: inherit;
        text-decoration: none;
        margin-right: 10px;
    }
`
const TypographyLogo = styled(Typography)`

    && {
        font-weight: bold;
        font-size: 20px;
        color: #fff;
        margin-right: 5px;
    }
`
const TypographyPartialLogo = styled(Typography)`

    && {
        font-weight: bold;
        color: #9ccc65;
        font-size: 20px;
    }
`
const BoxButtons = styled(Box)`

    && {
        flex-grow: 1;
        display: flex;
        @media (min-width: 768px) {
        display: none; /* Esconde em telas médias e maiores */
        }
    }
`

const BoxButtonsMenu = styled(Button)`

    && {
        color: #fff;
        display: block;
        text-transform: none;
    }
`
const BoxContent = styled(Box)`

    && {
        flex-grow: 1;
        display: none; /* Por padrão, esconde em telas extra pequenas (xs) */

        @media (min-width: 768px) {
            display: flex; /* Exibe em telas de tamanho médio (md) e maiores */
        }
    }
`

export {
    StyledAppBar,
    StyledToolbar,
    LinkLogo,
    TypographyLogo,
    TypographyPartialLogo,
    BoxButtons,
    BoxButtonsMenu,
    BoxContent,
}