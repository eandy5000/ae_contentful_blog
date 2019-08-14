/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  console.log("isModalVisible ", isModalVisible)

  const updateModal = () => setIsModalVisible(prevState => !prevState)

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        isModalVisible={isModalVisible}
        updateModal={updateModal}
      />
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

        {!isModalVisible ? null : (
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              top: "6rem",
              right: "0.6rem",
              minWidth: "60%",
              border: "3px solid black",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontStyle: "bold",
                borderBottom: "1px solid black",
                margin: "1rem 0",
                paddingBottom: "1rem",
                fontWeight: 600,
              }}
            >
              MENU
            </div>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  fontSize: "2rem",
                  margin: "1rem 0",
                  paddingBottom: "1rem",
                }}
              >
                STORIES
              </div>
            </Link>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  margin: "1rem 0",
                  paddingBottom: "1rem",
                }}
              >
                ABOUT
              </div>
            </Link>
          </div>
        )}
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
