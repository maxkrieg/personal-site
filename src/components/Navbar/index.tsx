import React from 'react'
import { Nav, Navbar as NavbarRB } from 'react-bootstrap'

import sections from '../../content/sections'

const Navbar: React.FC = () => {
  return (
    <NavbarRB
      expand="sm"
      sticky="top"
      bg="light"
      variant="light"
      style={{ boxShadow: '0 2px 10px 0px #777' }}
    >
      <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
      <NavbarRB.Brand as="span">MAX KRIEG</NavbarRB.Brand>
      <NavbarRB.Collapse>
        <Nav>
          {sections.map(({ title }) => (
            <Nav.Link key={title} href={`//${window.location.host}#${title}`}>
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </NavbarRB.Collapse>
    </NavbarRB>
  )
}

export default Navbar
