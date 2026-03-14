import React, { useState, useEffect } from 'react'
import { Nav, Navbar as NavbarRB } from 'react-bootstrap'

import sections from '../../content/sections'
import './index.css'

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 80 // offset for navbar height

      let current = ''
      for (const { title } of sections) {
        const el = document.getElementById(title)
        if (el && el.offsetTop <= scrollY) {
          current = title
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavbarRB expand="sm" sticky="top" variant="dark" className="site-navbar">
      <NavbarRB.Brand as="span" className="navbar-brand-name">MAX KRIEG</NavbarRB.Brand>
      <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
      <NavbarRB.Collapse>
        <Nav className="ml-auto">
          {sections.map(({ title }) => (
            <Nav.Link
              key={title}
              href={`//${window.location.host}#${title}`}
              className={`navbar-section-link ${activeSection === title ? 'navbar-section-link--active' : ''}`}
            >
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </NavbarRB.Collapse>
    </NavbarRB>
  )
}

export default Navbar
