'use client'
import StyledComponentsRegistry from './registry'
import { Inter } from "next/font/google";
import Header from './partials/header/Header'
import Footer from './partials/footer/Footer'
import styled from 'styled-components'

const inter = Inter({ subsets: ["latin"] })

const StyledContent = styled.div`

 && {
 height: 100%;
}

`

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">

        <body className={inter.className} style={{ margin: '0px', padding: '0px' }}>
          
          <StyledComponentsRegistry>

              <Header />

              <StyledContent>

                {children}

              </StyledContent>

            <Footer />

          </StyledComponentsRegistry>

        </body>

      </html>

    </>
  );
}