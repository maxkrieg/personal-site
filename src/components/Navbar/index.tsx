import React from 'react'
import { Nav, Navbar as NavbarRB } from 'react-bootstrap'

import sections from '../../content/sections'
import './index.css'

const Navbar: React.FC = () => {
  return (
    <NavbarRB
      expand="sm"
      sticky="top"
      variant="dark"
      className="site-navbar"
    >
      <NavbarRB.Brand as="span" className="navbar-brand-name">MAX KRIEG</NavbarRB.Brand>
      <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
      <NavbarRB.Collapse>
        <Nav className="ml-auto">
          {sections.map(({ title }) => (
            <Nav.Link key={title} href={`//${window.location.host}#${title}`} className="navbar-section-link">
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </NavbarRB.Collapse>
    </NavbarRB>
  )
}

export default Navbar
