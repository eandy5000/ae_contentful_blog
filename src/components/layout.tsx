/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.scss"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
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
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          minHeight: "70vh",
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "black",
          color: "white",
          minHeight: "30vh",
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: "2rem 0",
          }}
        >
          © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default Layout
