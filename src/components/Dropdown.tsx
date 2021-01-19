import React, { useState } from "react"
import "./Dropdown.scss"

type DropdownProps = {
  text: string
  dropdownList?: []
  additionalStyle?: string
}

const Button: React.FC<DropdownProps> = ({
  text,
  dropdownList,
  additionalStyle,
}) => {
  const [showDropdown, useShowDropdown] = useState<boolean>(false)
  return (
    <>
      <button
        className={`button ${additionalStyle ? additionalStyle : ""}`}
        onClick={() => useShowDropdown(!showDropdown)}
      >
        {text}
        <div className={`arrow-${showDropdown ? "up" : "down"}`}></div>
      </button>{" "}
      {dropdownList?.length != 0 && (
        <div className={`menu__dropdown-list${showDropdown ? "" : "--hidden"}`}>
          {dropdownList?.map((subItem: { label: string }, index: number) => (
            <button key={index} className="menu__dropdown-item">
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Button
