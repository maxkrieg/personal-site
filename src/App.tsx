import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import sections from './content/sections'
import banner from './content/zion-background.jpg'
import Navbar from './components/Navbar'
import './App.css'

const LIGHT_BG = '#F1F2F4'
const DARK_BG = '#E2E6E9'

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Image src={banner} style={{ width: '100%' }} fluid />
        </Row>
        {sections.map(({ title, content }, i) => (
          <Row
            noGutters
            id={title}
            key={title}
            style={i % 2 === 0 ? { backgroundColor: DARK_BG } : { backgroundColor: LIGHT_BG }}
          >
            <Container fluid className="home_section-container">
              <Row noGutters>
                <Col>
                  <h2>{title}</h2>
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
