import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import './index.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

interface SkillSectionDataItem {
  name: string
  value: number
}

interface SkillSection {
  name: string
  data: SkillSectionDataItem[]
}

const SKILL_SECTIONS: SkillSection[] = [
  {
    name: 'Languages',
    data: [
      { name: 'JavaScript', value: 90 },
      { name: 'Typescript', value: 75 },
      { name: 'Python', value: 85 },
      { name: 'Ruby', value: 60 },
      { name: 'SQL', value: 75 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 },
    ],
  },
  {
    name: 'Front End',
    data: [
      { name: 'React.js', value: 95 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 },
      { name: 'Sass', value: 70 },
      { name: 'webpack', value: 85 },
      { name: 'mocha', value: 90 },
      { name: 'jest', value: 90 },
    ],
  },
  {
    name: 'Back End',
    data: [
      { name: 'Node.js', value: 90 },
      { name: 'Express.js', value: 90 },
      { name: 'GraphQL', value: 75 },
      { name: 'Flask', value: 75 },
      { name: 'RxJS', value: 50 },
      { name: 'Ruby on Rails', value: 60 },
    ],
  },
  {
    name: 'Data',
    data: [
      { name: 'PostgreSQL', value: 90 },
      { name: 'MongoDB', value: 70 },
      { name: 'RabbitMQ', value: 65 },
      { name: 'Memcached', value: 70 },
      { name: 'Redis', value: 65 },
    ],
  },
  {
    name: 'DevOps',
    data: [
      { name: 'Docker', value: 75 },
      { name: 'Kubernetes', value: 50 },
      { name: 'Helm', value: 40 },
      { name: 'SaltStack', value: 70 },
      { name: 'Virtual Machines', value: 65 },
    ],
  },
  {
    name: 'Methodologies',
    data: [
      { name: 'Mob & Pair Programming', value: 90 },
      { name: 'LEAN', value: 90 },
      { name: 'Microservice Architecture', value: 88 },
      { name: 'Remote Collaboration', value: 75 },
      { name: 'CI/CD', value: 85 },
    ],
  },
]

interface ChartProps {
  data: SkillSectionDataItem[]
}

const SkillRadarChart: React.FC<ChartProps> = ({ data }) => {
  const newData = data.map((skill) => ({ ...skill, fullMark: 100 }))
  return (
    <ResponsiveContainer width="90%" height={400} className="skill_chart__container">
      <RadarChart data={newData} style={{ margin: '0 auto' }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Radar
          name="Skill Level"
          dataKey="value"
          stroke="#007BFF"
          fill="#007BFF"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

const SkillChart: React.FC = () => {
  const { width } = useWindowDimensions()
  return (
    <Tab.Container id="center-tabs-example" defaultActiveKey="languages">
      <Row className="justify-content-md-center">
        <Col sm={12} md={12} lg={9} xl={8}>
          <Nav
            fill
            variant="pills"
            style={{ paddingTop: '70px' }}
            className={width < 730 ? 'flex-column' : ''}
          >
            {SKILL_SECTIONS.map((section: SkillSection, i) => (
              <Nav.Item key={i}>
                <Nav.Link eventKey={section.name.toLowerCase().replace(' ', '-')}>
                  {section.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Tab.Content>
            {SKILL_SECTIONS.map((section: SkillSection, i) => (
              <Tab.Pane eventKey={section.name.toLowerCase().replace(' ', '-')} key={i}>
                <SkillRadarChart data={section.data} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default SkillChart
