import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import SkillList from '../components/SkillList'
import Portfolio from '../components/Portfolio'
import maxHeadshotPhoto from './max-headshot.jpg'

interface Section {
  title: string
  content: JSX.Element
}

const sections: Section[] = [
  {
    title: 'about me',
    content: (
      <div>
        <Image src={maxHeadshotPhoto} roundedCircle style={{ height: '20%', width: '20%' }} fluid />
        <div style={{ height: '16px' }} />
        <p>
          I'm a Staff Software Engineer with 10+ years of experience building SaaS products in{' '}
          <strong>fintech</strong> and <strong>edtech</strong>. I've led cross-functional engineering
          teams, shaped technical strategy, and driven high-impact initiatives across product areas.
          My core stack includes <strong>Node.js</strong>, <strong>React</strong>,{' '}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Python</strong>,{' '}
          <strong>Elixir</strong>, and <strong>PostgreSQL</strong>. I'm currently focused on{' '}
          <strong>LLM-powered multi-agent systems</strong> and agentic workflows — including a
          production chat agent — that meaningfully improve how people work.
        </p>
      </div>
    ),
  },
  {
    title: 'skills',
    content: (
      <div>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col sm={12}>
              <p>
                I believe the best engineers are relentless learners. There is no "one size fits
                all" tech stack — the right tool depends on the problem. I thrive at the
                intersection of technical depth and team leadership, and I'm especially energized by
                the emerging space of <strong>AI-powered applications</strong> and{' '}
                <strong>agentic systems</strong>.
              </p>
            </Col>
          </Row>
        </Container>
        <div style={{ height: '30px' }} />
        <SkillList />
      </div>
    ),
  },
  {
    title: 'portfolio',
    content: <Portfolio />,
  },
  {
    title: 'contact',
    content: (
      <div style={{ marginTop: '10px' }}>
        <a
          href="https://www.linkedin.com/in/maxkrieg"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn — Max Krieg
        </a>
        <span style={{ width: '10px', display: 'inline-block' }} />
        <a
          href="https://github.com/maxkrieg"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          GitHub — @maxkrieg
        </a>
      </div>
    ),
  },
]

export default sections
