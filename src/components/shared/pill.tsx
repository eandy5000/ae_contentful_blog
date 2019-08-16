import * as React from "react"

interface Props {
  text: string
}

const Pill = ({ text }: Props) => {
  return <span className="pill">{text}</span>
}

export default Pill
