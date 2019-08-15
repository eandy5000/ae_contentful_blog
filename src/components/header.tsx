import { Link } from "gatsby"
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa"

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
      <FaTimes
        style={{ color: "white", fontSize: "2rem" }}
        onClick={updateModal}
      />
    ) : (
      <FaBars
        style={{ color: "white", fontSize: "2rem" }}
        onClick={updateModal}
      />
    )

  return (
    <header
      style={{
        background: `black`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
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
