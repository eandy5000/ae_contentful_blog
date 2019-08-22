import * as React from "react"
import { Link } from "gatsby"
import { PageRoutes } from "../config/routes"

interface Props {
  isModalVisible: boolean
}

const ModelMenu = ({ isModalVisible }: Props) => {
  if (false === isModalVisible) {
    return null
  } else {
    return (
      <div className={"modal__body"}>
        <div className={"modal__menuText"}>MENU</div>
        <Link
          to={PageRoutes.STORIES_PAGE_1}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={"modal__linkText"}>STORIES</div>
        </Link>
        <Link
          to={PageRoutes.FEATURES_PAGE_1}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={"modal__linkText"}>FEATURES</div>
        </Link>
        <Link
          to={PageRoutes.ABOUT}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={"modal__linkText"}>ABOUT</div>
        </Link>
      </div>
    )
  }
}

export default ModelMenu
