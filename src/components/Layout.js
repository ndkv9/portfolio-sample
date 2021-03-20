import React from "react"
import NavBar from "./NavBar"

export default function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright 2021 Erik Vu Nguyen</p>
      </footer>
    </div>
  )
}
