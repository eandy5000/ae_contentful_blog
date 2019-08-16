import * as React from "react"
import { Link } from "gatsby"

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
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className={"modal__linkText"}>STORIES</div>
        </Link>
        <Link to={"/about"} style={{ textDecoration: "none", color: "black" }}>
          <div className={"modal__linkText"}>ABOUT</div>
        </Link>
      </div>
    )
  }
}

export default ModelMenu
