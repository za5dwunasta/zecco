import React, { useState } from "react"
import "./button.scss"

type ButtonProps = {
  text: string
  additionalStyle?: string
}

const Button: React.FC<ButtonProps> = ({
  text,

  additionalStyle,
}) => {
  return (
    <>
      <button className={`button ${additionalStyle ? additionalStyle : ""}`}>
        {text}
      </button>
    </>
  )
}

export default Button
