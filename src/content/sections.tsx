import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GitHubButton from 'react-github-btn'

import SkillList from '../components/SkillList'
import Portfolio from '../components/Portfolio'
import maxRowanPhoto from './max-rowan.jpg'

interface Section {
  title: string
  content: JSX.Element
}

const sections: Section[] = [
  {
    title: 'about me',
    content: (
      <div>
        <Image src={maxRowanPhoto} roundedCircle style={{ height: '20%', width: '20%' }} fluid />
        <div style={{ height: '16px' }} />
        <p>
          I'm a Staff Software Engineer with deep experience architecting and scaling full-stack web
          applications and platforms in the SaaS industry. I've led cross-functional engineering
          teams, shaped technical strategy, and driven high-impact initiatives across product areas.
          My core stack includes <strong>Node.js</strong>, <strong>React</strong>,{' '}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Python</strong>,{' '}
          <strong>Elixir</strong>, and <strong>PostgreSQL</strong>. I'm passionate about building{' '}
          <strong>agentic workflows</strong> and AI-powered features — including conversational chat
          applications — that meaningfully improve how people work.
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
          href="https://twitter.com/MaxwellKrieg?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
          data-size="large"
        >
          Follow @MaxwellKrieg
        </a>
        <span style={{ width: '10px', display: 'inline-block' }} />
        <GitHubButton
          href="https://github.com/maxkrieg"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          data-show-count={true}
          aria-label="Follow @maxkrieg on GitHub"
        >
          Follow @maxkrieg
        </GitHubButton>
      </div>
    ),
  },
]

export default sections
