import styled from 'styled-components'
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'

import {
  Box,
  Grid
} from '@mui/material'

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`
const BoxContent = styled.div`

&& {
    background-color: #f9f9f9;
    border-radius: 10px ;
    padding: 50px;
    margin: 0px 10px;
    max-width: 450px;
    height: 200px;
    flex-direction: column;
   display: flex;
   justify-content: center;
    border: 1px solid rgb(12, 60, 96);
} 
`
const BoxContacts = styled(Box)`
&& {
  display: flex; 
}

`
const ForwardToInboxIconEmail = styled(ForwardToInboxIcon)`
&&{
  margin-right: 10px;
  color: #0f3464;
}
`
const WhatsAppNumberIcon = styled(WhatsAppIcon)`
&& {
  margin-right: 10px;
  color: #25d366;
}
`
const Banner = styled(Image)`
&& {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const ContainerBanner = styled(Grid)`
&& {
  height: 200px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
`

export {
  Container,
  ContainerBanner,
  Banner,
  WhatsAppNumberIcon,
  ForwardToInboxIconEmail,
  BoxContacts,
  BoxContent,
}