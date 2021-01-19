import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { link } from "fs"
import "./Menu.scss"
import Button from "./Button"
import Dropdown from "./Dropdown"

const Menu: React.FC = () => {
  const menu = useStaticQuery(graphql`
    query MyQuery {
      allWpMenu {
        edges {
          node {
            slug
            menuItems {
              nodes {
                label
                url
                parentId
                id
                childItems {
                  nodes {
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const menuItems = menu.allWpMenu.edges[0].node.menuItems.nodes
  console.log(menuItems)

  return (
    <div className="menu">
      {menuItems?.map(
        (
          item: {
            parentId: null | string
            label: string
            childItems: { nodes: [] }
          },
          index: number
        ) =>
          item.parentId === null && (
            <div
              key={index}
              className={
                item.childItems.nodes.length != 0
                  ? "menu__dropdown"
                  : "menu__item"
              }
            >
              {item.childItems.nodes.length === 0 ? (
                <Button text={item.label} />
              ) : (
                <Dropdown
                  text={item.label}
                  dropdownList={
                    item.childItems.nodes ? item.childItems.nodes : []
                  }
                />
              )}
              {/* <Button
                text={item.label}
                dropdownList={
                  item.childItems.nodes ? item.childItems.nodes : []
                }
              /> */}
            </div>
          )
      )}
    </div>
  )
}

export default Menu
