import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

import sections from './content/sections'
import Navbar from './components/Navbar'
import ParticleHero from './components/ParticleHero'
import useScrollReveal from './utils/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [spotlightActive, setSpotlightActive] = useState(false)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor || !window.gtag) return
      window.gtag('event', 'link_click', {
        link_url: anchor.href,
        link_text: anchor.textContent?.trim() || anchor.getAttribute('aria-label') || '',
        outbound: anchor.hostname !== window.location.hostname,
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setSpotlightActive(true)
    }
    const onLeave = () => setSpotlightActive(false)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div
        className="cursor-spotlight"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: spotlightActive ? 1 : 0,
        }}
      />
      <Navbar />
      <Container fluid style={{ padding: 0 }}>
        <Row className="banner-row g-0">
          <Col>
            <div className="banner-hero">
              <ParticleHero />
              <div className="banner-text">
                <h1 className="banner-name">MAX KRIEG</h1>
                <p className="banner-title">Staff Software Engineer</p>
              </div>
            </div>
          </Col>
        </Row>
        {sections.map(({ title, content }, i) => (
          <Row
            noGutters
            id={title}
            key={title}
            className={`section-row ${i % 2 === 0 ? 'section-dark' : 'section-darker'}`}
          >
            <Container fluid className="home_section-container">
              <Row className="justify-content-md-center g-0">
                <Col xs={12} sm={12} className="reveal-on-scroll">
                  <h2 className="section-title">{title}</h2>
                  <div className="section-divider" />
                  {content}
                </Col>
              </Row>
            </Container>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default App
