/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ModalMenu from "../components/modal-menu"
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

  const updateModal = () => setIsModalVisible(prevState => !prevState)

  return (
    <div className={"layout__wrapper"}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        isModalVisible={isModalVisible}
        updateModal={updateModal}
      />
      <div className={"layout__body"}>
        <main>{children}</main>

        <ModalMenu isModalVisible={isModalVisible} />
      </div>
      <footer className={"layout__footerWrapper"}>
        <div className={"layout__footerText"}>© {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}

export default Layout
