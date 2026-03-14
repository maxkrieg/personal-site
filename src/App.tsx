import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import sections from './content/sections'
import Navbar from './components/Navbar'
import useScrollReveal from './utils/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Container fluid style={{ padding: 0 }}>
        <Row noGutters className="banner-row">
          <Col>
            <div className="banner-hero">
              <h1 className="banner-name">MAX KRIEG</h1>
              <p className="banner-title">Staff Software Engineer</p>
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
              <Row noGutters className="justify-content-md-center">
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
