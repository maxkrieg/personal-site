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
      { name: 'Typescript', value: 90 },
      { name: 'Python', value: 80 },
      { name: 'SQL', value: 60 },
      { name: 'Elixir', value: 40 }
    ],
  },
  {
    name: 'Front End',
    data: [
      { name: 'React', value: 95 },
      { name: 'Apollo', value: 75 },
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
      { name: 'GraphQL', value: 70 },
      { name: 'Flask (python)', value: 75 },
      { name: 'Elixir/Phoenix', value: 40 }
    ],
  },
  {
    name: 'Data Stores',
    data: [
      { name: 'PostgreSQL', value: 90 },
      { name: 'MongoDB', value: 60 },
      { name: 'RabbitMQ', value: 70 },
      { name: 'Redis', value: 65 },
    ],
  }
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
          <Nav fill variant="pills" className={width < 730 ? 'flex-column' : ''}>
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
