import * as React from "react"

interface Props {
  text: string
}

const Pill = ({ text }: Props) => {
  return (
    <span
      style={{
        backgroundColor: "#000000",
        color: "white",
        borderRadius: "10px",
        padding: "5px",
        marginRight: "10px",
        fontSize: "0.6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  )
}

export default Pill
