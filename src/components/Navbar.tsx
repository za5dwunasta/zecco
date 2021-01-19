import React from "react"
import Logo from "../../content/assets/zecco-logo.svg"
import "./Navbar.scss"
import Menu from "./Menu"
import LogIn from "./LogIn"

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Logo />
      <Menu />
      <LogIn />
    </div>
  )
}

export default Navbar
