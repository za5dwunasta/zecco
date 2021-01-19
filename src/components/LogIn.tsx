import React from "react"
import Button from "./Button"

const LogIn: React.FC = () => {
  return (
    <div className="login">
      <Button text="Log in" />
      <Button text="Create account" additionalStyle="login__button" />
    </div>
  )
}

export default LogIn
