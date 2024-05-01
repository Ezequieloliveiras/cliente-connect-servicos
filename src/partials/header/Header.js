import Drawer from '../drawer/Drawer'

import {
    StyledAppBar,
    StyledToolbar,
    LinkLogo,
    TypographyLogo,
    TypographyPartialLogo,
    BoxButtons,
    BoxButtonsMenu,
    BoxContent,
} from './StylesHeader'


function ResponsiveAppBar() {

    return (
        <StyledAppBar position="static">

            <StyledToolbar disableGutters>

                <BoxButtons>
                    
                <Drawer />
                    
                </BoxButtons>

                <LinkLogo href="/" >

                    <TypographyLogo >CONNECT</TypographyLogo>

                    <TypographyPartialLogo>SERVIÇOS</TypographyPartialLogo>

                </LinkLogo>


                <BoxContent >

                    <BoxButtonsMenu href='/'>
                       Inicío
                    </BoxButtonsMenu>

                    <BoxButtonsMenu href='/pages/works'>
                        Serviços
                    </BoxButtonsMenu>

                    <BoxButtonsMenu href='/pages/support'>
                        Suporte
                    </BoxButtonsMenu>

                    <BoxButtonsMenu href='/pages/contact'>
                        Contato
                    </BoxButtonsMenu>

                </BoxContent>

            </StyledToolbar>

        </StyledAppBar>
    )
}
export default ResponsiveAppBar