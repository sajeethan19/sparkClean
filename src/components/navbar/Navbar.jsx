import React from 'react'
import './Navbar.css'

function Navbar({title = "Title", logoPath = ""}) {
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={logoPath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                {title}
                </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar