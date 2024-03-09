import React from 'react'
import "./NavBar.css"
import {Link, NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div>
       {/* <Link > HOME</Link>
        <br/>
        <Link to="/contact">Contatos</Link>
      */}

      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}> HOME</NavLink>
      <br/>
      <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  )
}

export default NavBar