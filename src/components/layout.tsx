/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import tw from "twin.macro"

type LayoutProps = {
  children: React.ReactNode
}

const Container = tw.div`flex flex-1 flex-col h-screen`
const Main = tw.main`flex flex-1 flex-col items-center`
const Footer = tw.footer`flex justify-center w-full mt-2 py-2 shadow-inner`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Main>
        {children}
      </Main>
      <Footer>
        © {new Date().getFullYear()}, Built with&nbsp;
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </Container>
  )
}


export default Layout
