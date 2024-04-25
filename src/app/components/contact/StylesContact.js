import styled from 'styled-components'
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import { Box, Card, Grid } from '@mui/material'

const StyledBox = styled(Card)`
    background-color: #f9f9f9;
    border-radius: 10px ;
    padding: 50px;
    margin: 40px 5px;
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledBoxContacts = styled(Box)`
    display: flex;
    
`
const StyledForwardToInboxIcon = styled(ForwardToInboxIcon)`
    margin-right: 10px;
    color: #0f3464;
`
const StyledWhatsAppIcon = styled(WhatsAppIcon)`
    margin-right: 10px;
    color: #25d366;
`
const StyledBanner = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledContainerBanner = styled(Grid)`
    height: 300px;
    width: 100%;
    overflow: hidden;
    position: relative;
  
`
const StyledContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  justify-content:center;
`
const StyledDivCard = styled.div`
  display:flex;
  justify-content:center;
`

export {
    StyledDivCard,
    StyledContainer,
    StyledContainerBanner,
    StyledBanner,
    StyledWhatsAppIcon,
    StyledForwardToInboxIcon,
    StyledBoxContacts,
    StyledBox,
}