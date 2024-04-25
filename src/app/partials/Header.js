import Drawer from './Drawer'

import {
    StyledAppBar,
    StyledToolbar,
    StyledLinkLogo,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenu,
    StyledBoxContent,
} from './StylesHeader'


function ResponsiveAppBar() {

    return (
        <StyledAppBar position="static">

            <StyledToolbar disableGutters>

                <StyledBoxButtons>
                    
                <Drawer />
                    
                </StyledBoxButtons>

                <StyledLinkLogo href="/" >

                    <StyledTypographyLogo >CONNECT</StyledTypographyLogo>

                    <StyledTypographyPartialLogo>SERVIÇOS</StyledTypographyPartialLogo>

                </StyledLinkLogo>


                <StyledBoxContent >

                    <StyledBoxButtonsMenu href='/'>
                        Página Inicial
                    </StyledBoxButtonsMenu>

                    <StyledBoxButtonsMenu href='/pages/suporte'>
                        Suporte
                    </StyledBoxButtonsMenu>

                    <StyledBoxButtonsMenu href='/pages/contact'>
                        Contato
                    </StyledBoxButtonsMenu>

                </StyledBoxContent>

            </StyledToolbar>

        </StyledAppBar>
    )
}
export default ResponsiveAppBar