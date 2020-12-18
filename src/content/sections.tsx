import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GitHubButton from 'react-github-btn'

import SkillChart from '../components/SkillChart'
import Timeline from '../components/Timeline'
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
          I'm a passionate Software Engineer who loves to collaborate with others to solve hard
          problems. I enjoy full-stack web development as well as Dev Ops work. I believe in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lean_software_development"
            target="_blank"
            rel="noopener noreferrer"
          >
            lean software development
          </a>
          , flow efficiency, and mob programming. Outside of coding, I enjoy hiking, climbing, or
          skiing. I'm a lifelong learner obsessed with constantly bettering myself in all facets of
          life.
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
                The reason I enjoy Software Development is because{' '}
                <strong>
                  I love to <em>learn</em>
                </strong>
                . I always want to challenge myself and to skill up in new areas. I believe there is
                no "one size fits all" when it comes to a tech stack and that different
                circumstances call for different technologies.
              </p>
              <div style={{ height: '20px' }} />
              <p>
                The majority of my current programming skills lie in <strong>JavaScript</strong> and{' '}
                <strong>Python</strong>. I enjoy <strong>React.js</strong> on the front end and{' '}
                <strong>Node.js</strong> on the back end. I have been using{' '}
                <strong>Typescript</strong> much more lately on both the front end and back end.{' '}
                <strong>PostgreSQL</strong> has been my database of choice, alongside{' '}
                <strong>Redis</strong> for caching. Skilling up in the area of{' '}
                <strong>DevOps</strong> has also been a focus recently, with much of my time spent
                working within <strong>Docker</strong>, <strong>Kubernetes</strong>, and{' '}
                <strong>AWS</strong>.
              </p>
            </Col>
          </Row>
        </Container>
        <div style={{ height: '30px' }} />
        <SkillChart />
      </div>
    ),
  },
  {
    title: 'timeline',
    content: <Timeline />,
  },
  {
    title: 'portfolio',
    content: (
      <p>
        While most of my code is written for work, I have some personal projects on{' '}
        <a href="https://github.com/maxkrieg" target="_blank" rel="noopener noreferrer">
          github
        </a>
        .
      </p>
    ),
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
          data-color-scheme="no-preference: light; light: light; dark: dark;"
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
