import styled from 'styled-components'
import {
  Box,
  Link,
} from '@mui/material'

const BoxFooter = styled(Box)`

    && {
      background-color: rgb(12, 60, 96);
      color: #fff;
      padding: 50px 0 ;
    }
`
const List = styled.li`

    && {
      list-style: none;
      padding: 0 ;
    }
`
const LinkFooter = styled(Link)`

    && {
      color: #fff;
      text-decoration: none;
    }
`
export {
  BoxFooter,
  List,
  LinkFooter,
}