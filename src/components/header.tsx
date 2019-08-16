import { Link } from "gatsby"
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { PageRoutes } from "../config/routes"

interface Props {
  siteTitle: string
  isModalVisible: boolean
  updateModal: () => void
}

const Header = ({
  siteTitle,
  isModalVisible,
  updateModal,
}: Props): JSX.Element => {
  const menuIcons = () =>
    isModalVisible ? (
      <FaTimes className={"header__menuIcon"} onClick={updateModal} />
    ) : (
      <FaBars className={"header__menuIcon"} onClick={updateModal} />
    )

  return (
    <header className={"header__headerWrapper"}>
      <div className={"header__siteNameAndMenu"}>
        <h1 className={"header__h1"}>
          <Link to={PageRoutes.STORIES_PAGE_1} className={"header__link"}>
            {siteTitle}
          </Link>
        </h1>
        <div>{menuIcons()}</div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
