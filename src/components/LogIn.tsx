import React from "react"
import Button from "./Button"

const LogIn = () => {
  return (
    <div className="login">
      <Button text="Log in" dropdownList={["new item", "another"]} />
      <Button text="Create account" additionalStyle="login__button" />
    </div>
  )
}

export default LogIn
